<template>
  <div :class="className.outer">
    <!-- An expandable -->
    <label v-if="expandable"
      class="mdl-button mdl-js-button mdl-button--icon"
      :for="id">
      <slot>
        <i class="material-icons">search</i>
      </slot>
    </label>
    <div :class="className.inner">
      <label class="mdl-textfield__label" :for="expandable ? null : id">
        <slot>{{ label }}</slot>
      </label>
      <!-- A multi-line -->
      <template v-if="isTextarea">
        <textarea class="mdl-textfield__input"
          :id="id"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :maxlength="maxlength"
          :name="name"
          :placeholder="labelFloating ? null : placeholder"
          :readonly="readonly"
          :required="required"
          :rows="rows"
          :cols="cols"
          v-model="currentValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          @keydown="handleKeydown"
          @keydown.enter="handleKeydownEnter"></textarea>
      </template>
      <!-- A single-line -->
      <template v-else>
        <input class="mdl-textfield__input"
          :type="type"
          :id="id"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :maxlength="maxlength"
          :name="name"
          :pattern="pattern"
          :placeholder="labelFloating ? null : placeholder"
          :readonly="readonly"
          :required="required"
          :value="currentValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange"
          @keydown="handleKeydown"
          @keydown.enter="handleKeydownEnter"
          data-input>
      </template>
      <span v-if="error" class="mdl-textfield__error">
        <slot name="error">{{ error }}</slot>
      </span>
      <span v-if="plus" class="mdl-textfield__plus">
        <slot name="plus"><!-- counter --></slot>
      </span>
      <div v-if="expand" class="mdl-textfield__expand">
        <slot name="expand"><!-- autocomplete --></slot>
      </div>
    </div>
  </div>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/textfield/textfield';

const EVENT_INPUT = 'input';
const EVENT_CHANGE = 'change';
const EVENT_FOCUS = 'focus';
const EVENT_BLUR = 'blur';
const EVENT_KEYDOWN = 'keydown';
const EVENT_KEYDOWN_ENTER = 'enter';

export default {
  name: 'ui-textfield',
  mixins: [mdlMixin],
  props: {
    // state
    model: null,
    // element attributes
    id: String,
    name: String,
    autocomplete: String,
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: [Number, String],
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    // input attributes
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    // textarea attributes
    rows: {
      type: [Number, String],
      default: 1
    },
    cols: {
      type: [Number, String],
      default: 20
    },
    // ui attributes
    label: String,
    labelFloating: {
      type: Boolean,
      default: false
    },
    error: String,
    alignRight: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    expandable: {
      type: Boolean,
      default: false
    },
    plus: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.model
    };
  },
  computed: {
    isTextarea() {
      return this.type.toLowerCase() === 'textarea';
    },
    className() {
      return {
        outer: {
          'mdl-textfield': true,
          'mdl-js-textfield': true,
          'mdl-textfield--floating-label': this.labelFloating,
          'mdl-textfield--align-right': this.alignRight,
          'mdl-textfield--full-width': this.fullWidth,
          'mdl-textfield--expandable': this.expandable,
          'mdl-textfield--plus': this.plus,
          'is-textarea': this.isTextarea
        },
        inner: {
          'mdl-textfield__expandable-holder': this.expandable,
          'mdl-input__expandable-holder': this.plus
        }
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
      this.checkDirty();
    }
  },
  methods: {
    checkDirty() {
      if (this.label) {
        // Bugfix for dynamic assignment
        this.className.outer['is-dirty'] = this.currentValue && this.currentValue.length;
      }
    },
    handleFocus(event) {
      this.$emit(EVENT_FOCUS, event);
    },
    handleBlur(event) {
      this.$emit(EVENT_BLUR, event);
    },
    handleInput(event) {
      this.$emit(EVENT_INPUT, event.target.value); // value: string
    },
    handleChange(event) {
      this.$emit(EVENT_CHANGE, event);
    },
    handleKeydown(event) {
      this.$emit(EVENT_KEYDOWN, event);
    },
    handleKeydownEnter(event) {
      this.$emit(EVENT_KEYDOWN_ENTER, event.target.value);
    }
  },
  created() {
    if (this.labelFloating && !this.label) {
      console.warn('Labelfloating textfield need a label.');
    }
    if (this.expandable && !this.id) {
      console.warn('Expandable textfield need an id.');
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialTextfield');
  }
};
</script>
