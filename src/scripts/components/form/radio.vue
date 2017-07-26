<template>
  <label :class="className">
    <input type="radio"
      class="mdl-radio__button"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span lass="mdl-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../../material-design-lite/radio/radio';
import '../../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-radio',
  props: {
    // state
    model: {
      type: [String, Number, Boolean],
      default: false
    },
    // element attributes
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Boolean],
    // ui attributes
    label: String,
    noRipple: {
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
    className() {
      return {
        'mdl-radio': true,
        'mdl-js-radio': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple, // bugfix for ripple
        'is-upgraded': true, // bugfix for css
        'is-checked': this.isChecked,
        'mdl-radio--disabled': this.disabled
      };
    },
    isChecked() {
      return this.currentValue === this.value;
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue);
    }
  },
  mounted() {
    this.$mdl.upgradeElements(this.$el);
  }
};
</script>
