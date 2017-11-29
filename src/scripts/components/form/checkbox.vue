<template>
  <label :class="className">
    <input type="checkbox"
      class="mdl-checkbox__input"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span v-if="!hideLabel" class="mdl-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
    </span>
  </label>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/checkbox/checkbox';
import '../../../material-design-lite/ripple/ripple';
import getType from '../../helpers/typeof';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-checkbox',
  mixins: [mdlMixin],
  props: {
    // state
    model: {
      type: [Array, String, Number, Boolean],
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
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    filled: {
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
        'mdl-checkbox': true,
        'mdl-js-checkbox': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple, // bugfix for ripple
        'is-upgraded': true, // bugfix for css
        'is-checked': this.isChecked,
        'mdl-checkbox--disabled': this.disabled,
        'is-filled': this.filled
      };
    },
    isChecked() {
      return (getType(this.currentValue) === 'array')
        ? this.currentValue.indexOf(this.value) > -1
        : (this.currentValue == this.value || this.currentValue === true);
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
