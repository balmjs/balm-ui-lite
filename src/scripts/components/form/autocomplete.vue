<template>
  <ui-textfield expand
    :class="className"
    :disabled="disabled"
    :placeholder="placeholder"
    :plus="plus"
    :model="currentValue"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
    @keydown="handleKeydown">
    <template slot="plus">
      <slot name="plus"></slot>
    </template>
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="(item, index) in currentSuggestion"
            v-html="item[ITEM_VALUE]"
            :key="index"
            :data-index="index"
            :class="{'active': index === currentSuggestionIndex}"
            @click="onSelect(item)">
        </li>
      </ul>
    </template>
  </ui-textfield>
</template>

<script>
import UiTextfield from './textfield';
import getType from '../../helpers/typeof';
import {jsonEqual} from '../../helpers/utils';
import detectIE from '../../helpers/detect-ie';

const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;
// const KEYCODE_ESCAPE = 27;
const KEYCODE_ENTER = 13;
const ITEM_ACTIVE = 'active';
const ITEM_KEY = 'key';
const ITEM_VALUE = 'value';
const _EVENT_CLICK = 'click';
const _EVENT_MOUSEOVER = 'mouseover';
const _EVENT_MOUSELEAVE = 'mouseleave';
const EVENT_INPUT = 'input';
const EVENT_SEARCH = 'search';
const EVENT_SELECTED = 'selected';
const REMOVE_HTML_TAG_REGEX = new RegExp('<[^>]+>', 'g');

export default {
  name: 'ui-autocomplete',
  components: {
    UiTextfield
  },
  props: {
    // state
    model: null,
    // ui attributes
    autoFocus: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 300
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    minLength: {
      type: Number,
      default: 1
    },
    source: [Array, Function], // Two supported formats: ['value1', 'value2'] or [{key1: 'value1'}, {key2: 'value2'}]
    remote: {
      type: Boolean,
      default: false
    },
    plus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ITEM_VALUE,
      $autocomplete: null,
      _callback: null,
      isExpand: false,
      currentValue: this.model || '',
      currentSource: [], // source data
      currentSuggestion: [], // filter data
      currentSuggestionIndex: -1,
      currentSelectedItem: null,
      timer: null,
      lteIE10: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-autocomplete': true,
        'is-expand': this.isExpand
      };
    }
  },
  watch: {
    model(val) {
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    },
    source(data) {
      this.setDataSource(data);
      this.show();
    }
  },
  mounted() {
    let ie = detectIE();
    this.lteIE10 = ie && ie < 11;

    this.$autocomplete = this.$refs.autocomplete;
    this.$autocomplete.addEventListener(_EVENT_MOUSEOVER, this.handleMouseover);
    this.$autocomplete.addEventListener(_EVENT_MOUSELEAVE, this.handleMouseleave);

    this.setDataSource(this.source);
  },
  beforeDestroy() {
    if (this._callback) {
      document.removeEventListener(_EVENT_CLICK, this._callback);
    }
    this.$autocomplete.removeEventListener(_EVENT_MOUSEOVER, this.handleMouseover);
    this.$autocomplete.removeEventListener(_EVENT_MOUSELEAVE, this.handleMouseleave);
  },
  methods: {
    show() {
      let keywords = this.currentValue.trim();
      if (keywords.length >= this.minLength && this.currentSuggestion.length) {
        this.isExpand = true;
      }
    },
    hide() {
      this.isExpand = false;
      this.currentSuggestionIndex = -1;
      this.clearSelected();
    },
    search(keywords) {
      if (this.remote) { // remote datasource
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.$emit(EVENT_SEARCH, keywords); // AJAX
        }, this.delay);
      } else { // local datasource
        this.currentSuggestion = this.currentSource.filter(word => {
          return RegExp(keywords).test(word.value);
        });

        this.show();
      }
    },
    setDataSource(dataSource) {
      if (getType(dataSource) === 'array') {
        this.currentSource = dataSource.map(data => {
          let item = {};

          if (getType(data) === 'string') {
            item[ITEM_KEY] = data;
            item[ITEM_VALUE] = data;
          } else if (getType(data) === 'object') {
            item = data;
          } else {
            console.warn('DataSource\'s item must be a string or object.');
          }

          return item;
        });

        this.currentSuggestion = this.currentSource;
      }
    },
    handleFocus(event) {
      if (this.autoFocus) {
        this.show();
      }
    },
    handleBlur(event) {
      if (!this._callback) {
        this._callback = e => {
          let inTextfield = false;
          let parentEl = e.target.parentNode;

          while (parentEl && parentEl !== this.$el) {
            parentEl = parentEl.parentNode;
            if (parentEl === this.$el) {
              inTextfield = true;
            }
          }

          if (e !== event && this.isExpand && !inTextfield) {
            document.removeEventListener(_EVENT_CLICK, this._callback);
            this.hide();
          }
        };
      }
      document.addEventListener(_EVENT_CLICK, this._callback);
    },
    handleInput(value) {
      this.currentValue = value;
      this.$emit(EVENT_INPUT, this.currentValue); // currentValue: string

      let keywords = this.currentValue.trim();
      if (keywords.length >= this.minLength) {
        this.search(keywords);
      } else {
        this.hide();
      }
    },
    handleKeydown(event) {
      if (this.currentSuggestion.length) { // TODO: overflow-y
        let MIN = 0;
        let MAX = this.currentSuggestion.length - 1;

        switch (event.keyCode) {
          case KEYCODE_UP:
            if (this.currentSuggestionIndex === MIN || this.currentSuggestionIndex === -1) {
              this.currentSuggestionIndex = MAX;
            } else {
              this.currentSuggestionIndex--;
            }
            break;
          case KEYCODE_DOWN: // TODO: overflow-y
            if (this.currentSuggestionIndex === MAX) {
              this.currentSuggestionIndex = MIN;
            } else {
              this.currentSuggestionIndex++;
            }
            break;
          case KEYCODE_ENTER:
            let selectedItem = this.currentSuggestion[this.currentSuggestionIndex];
            this.onSelect(selectedItem);
            event.preventDefault();
            break;
        }
      }
    },
    handleMouseover(event) {
      let el = event.target;
      if (el.tagName === 'LI' && !el.classList.contains(ITEM_ACTIVE)) {
        this.currentSelectedItem = el;

        this.clearSelected();

        el.classList.add(ITEM_ACTIVE);
        this.currentSuggestionIndex = this.lteIE10
          ? el.getAttribute('data-index')
          : el.dataset.index;
      }
    },
    handleMouseleave() {
      this.currentSelectedItem.classList.remove(ITEM_ACTIVE);
    },
    onSelect(selectedItem) {
      this.hide();

      delete selectedItem[ITEM_ACTIVE];

      let result = Object.assign({}, selectedItem);
      result[ITEM_VALUE] = result[ITEM_VALUE].replace(REMOVE_HTML_TAG_REGEX, '');
      this.currentValue = result[ITEM_VALUE];

      this.$emit(EVENT_SELECTED, result); // result: any
    },
    clearSelected() {
      let activeItem = this.$autocomplete.querySelector('li.active');
      if (activeItem) {
        activeItem.classList.remove(ITEM_ACTIVE);
      }
    }
  }
};
</script>
