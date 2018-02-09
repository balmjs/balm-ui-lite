<template>
  <label :class="className">
    <input type="checkbox"
      class="mdl-icon-toggle__input"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span v-if="icon" class="mdl-icon-toggle__label material-icons">
      <slot>{{ icon }}</slot>
    </span>
    <span v-else class="mdl-icon-toggle__label custom-icons">
      <slot><!-- Custom Icon --></slot>
    </span>
  </label>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/icon-toggle/icon-toggle';
import '../../../material-design-lite/ripple/ripple';
import getType from '../../helpers/typeof';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-icon-toggle',
  mixins: [mdlMixin],
  props: {
    // state
    model: {
      type: [Array, String, Number, Boolean],
      required: true,
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
    noRipple: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [Boolean, String],
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
        'mdl-icon-toggle': true,
        'mdl-js-icon-toggle': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple, // bugfix for ripple
        'is-upgraded': true, // bugfix for css
        'is-checked': this.isChecked,
        'mdl-icon-toggle--disabled': this.disabled
      };
    },
    isChecked() {
      return getType(this.currentValue) === 'array'
        ? this.currentValue.indexOf(this.value) > -1
        : this.currentValue == this.value || this.currentValue === true;
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
