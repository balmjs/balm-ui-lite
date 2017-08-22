<template>
  <ui-textfield :class="['mdl-autocomplete', {'is-expand': isExpand}]"
    :model="currentValue"
    :placeholder="placeholder"
    :plus="plus"
    expand
    @input.native="handleInput($event)"
    @blur="handleBlur"
    @keydown="handleKeydown">
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="(suggestion, index) in currentSuggestion"
            v-html="suggestion[ITEM_VALUE]"
            :class="{'active': suggestion[ITEM_ACTIVE]}"
            @click="fillText(suggestion)"
            :data-index="index">
        </li>
      </ul>
    </template>
    <template slot="plus">
      <slot name="plus"></slot>
    </template>
  </ui-textfield>
</template>

<script>
import UiTextfield from './textfield';
import {isString, isObject, jsonEqual, detectIE} from '../../helpers';

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ENTER = 13;
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const ITEM_ACTIVE = 'active';
const ITEM_KEY = 'key';
const ITEM_VALUE = 'value';
const _EVENT_CLICK = 'click';
const _EVENT_MOUSEOVER = 'mouseover';
const EVENT_INPUT = 'input';
const EVENT_RESPONSE = 'response';
const EVENT_ENTER = 'enter';
const REMOVE_HTML_TAG_REGEX = /<[^>]+>/g;

export default {
  name: 'ui-autocomplete',
  components: {
    UiTextfield
  },
  props: {
    // state
    model: null,
    // element attributes
    placeholder: String,
    // ajax attributes
    method: {
      type: String,
      default: METHOD_GET
    },
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: function() {
        return {};
      }
    },
    suggestion: Array,
    delay: {
      type: Number,
      default: 300
    },
    // ui attributes
    plus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ITEM_ACTIVE: ITEM_ACTIVE,
      ITEM_VALUE: ITEM_VALUE,
      _callback: null,
      isExpand: false,
      currentValue: this.model,
      currentParams: this.params,
      currentSuggestion: [],
      currentSuggestionIndex: 0,
      timer: null,
      $autocomplete: null,
      lteIE10: false
    }
  },
  methods: {
    show() {
      this.isExpand = true;
    },
    hide() {
      this.isExpand = false;
      this.currentSuggestion = [];
      this.currentSuggestionIndex = 0;
    },
    async search() {
      let config = {
        method: this.method.toLowerCase(),
        url: this.url
      };

      switch (this.method.toUpperCase()) {
        case METHOD_GET:
          config.params = this.currentParams;
          break;
        case METHOD_POST:
          config.data = this.currentParams;
          break;
      }

      let response = await this.$http(config);
      this.$emit(EVENT_RESPONSE, response.data);
    },
    handleInput(event) {
      this.currentValue = event.target.value;
      this.$emit(EVENT_INPUT, this.currentValue); // currentValue: string

      if (!this.currentValue) {
        this.hide();
      }
    },
    handleBlur(event) {
      if (!this._callback) {
        this._callback = e => {
          let inTextfield = false;
          let parentEl = e.target.parentNode;
          while (parentEl && parentEl !== this.$el) {
            if (parentEl === this.$el) {
              inTextfield = true;
            }
            parentEl = parentEl.parentNode;
          }

          if (e !== event && this.isExpand && !inTextfield) {
            document.removeEventListener(_EVENT_CLICK, this._callback);
            this.hide();
          }
        };
      }
      document.addEventListener(_EVENT_CLICK, this._callback);
    },
    fillText(data) {
      this.hide();

      delete data[ITEM_ACTIVE];
      let result = Object.assign({}, data);
      result[ITEM_VALUE] = result[ITEM_VALUE].replace(REMOVE_HTML_TAG_REGEX, '');
      this.currentValue = result[ITEM_VALUE];
      this.$emit(EVENT_ENTER, result); // result: any
    },
    setSuggestionIndex(data = this.currentSuggestion) {
      this.currentSuggestion = data.map((item, index) => {
        let result = {};

        if (isObject(item)) {
          result[ITEM_KEY] = item[ITEM_KEY];
          result[ITEM_VALUE] = item[ITEM_VALUE];
        } else if (isString(item)) {
          result[ITEM_KEY] = index;
          result[ITEM_VALUE] = item;
        } else {
          console.warn('Suggestion item must be a string or object.');
        }
        result[ITEM_ACTIVE] = index === this.currentSuggestionIndex;

        return result;
      });
    },
    handleKeydown(event) {
      if (this.currentSuggestion.length) { // TODO: overflow-y
        let count = this.currentSuggestion.length - 1;

        if (event.keyCode === KEY_UP) {
          if (this.currentSuggestionIndex === 0) {
            this.currentSuggestionIndex = count;
          } else {
            this.currentSuggestionIndex--;
          }
        } else if (event.keyCode === KEY_DOWN) { // TODO: overflow-y
          if (this.currentSuggestionIndex === count) {
            this.currentSuggestionIndex = 0;
          } else {
            this.currentSuggestionIndex++;
          }
        } else if (event.keyCode === KEY_ENTER) {
          let data = this.currentSuggestion[this.currentSuggestionIndex];
          this.hide();

          delete data[ITEM_ACTIVE];
          let result = Object.assign({}, data);
          result[ITEM_VALUE] = result[ITEM_VALUE].replace(REMOVE_HTML_TAG_REGEX, '');
          this.currentValue = result[ITEM_VALUE];
          this.$emit(EVENT_ENTER, result); // result: any
          event.preventDefault();
        }

        this.setSuggestionIndex();
      }
    },
    handleMouseover(event) {
      let el = event.target;
      if (el.tagName === 'LI' && !el.classList.contains(ITEM_ACTIVE)) {
        let activeItem = this.$autocomplete.querySelector('li.active');
        if (activeItem) {
          activeItem.classList.remove(ITEM_ACTIVE);
        }

        el.classList.add(ITEM_ACTIVE);
        this.currentSuggestionIndex = this.lteIE10
          ? el.getAttribute('data-index')
          : el.dataset.index;
      }
    }
  },
  watch: {
    model(val) {
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    },
    params(val) {
      if (!jsonEqual(val, this.currentParams)) {
        this.currentParams = val;

        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (this.currentValue && this.currentValue.trim()) {
          this.timer = setTimeout(() => {
            this.search();
          }, this.delay);
        }
      }
    },
    suggestion(data) {
      this.setSuggestionIndex(data);
      if (this.currentSuggestion.length) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  created() {
    let ie = detectIE();
    this.lteIE10 = ie && ie < 11;
    if (!this.$http) {
      console.warn('You need to install `axios`.');
    }
  },
  mounted() {
    this.$autocomplete = this.$refs.autocomplete;
    this.$autocomplete.addEventListener(_EVENT_MOUSEOVER, this.handleMouseover);
  },
  beforeDestroy() {
    if (this._callback) {
      document.removeEventListener(_EVENT_CLICK, this._callback);
    }
    this.$autocomplete.removeEventListener(_EVENT_MOUSEOVER, this.handleMouseover);
  }
};
</script>
