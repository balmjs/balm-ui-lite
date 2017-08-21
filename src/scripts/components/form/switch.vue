<template>
  <label :class="className">
    <input type="checkbox"
      class="mdl-switch__input"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span class="mdl-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/switch/switch';
import '../../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-switch',
  mixins: [mdlMixin],
  props: {
    // state
    model: Boolean,
    // element attributes
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: Boolean,
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
        'mdl-switch': true,
        'mdl-js-switch': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple, // bugfix for ripple
        'is-upgraded': true, // bugfix for css
        'is-checked': this.isChecked,
        'mdl-switch--disabled': this.disabled
      };
    },
    isChecked() {
      return this.currentValue === this.value || this.currentValue === true;
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue); // currentValue: boolean
    }
  },
  mounted() {
    this.$mdl.upgradeElements(this.$el);
  }
};
</script>
