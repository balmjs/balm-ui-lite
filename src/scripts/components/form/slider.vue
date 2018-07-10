<template>
  <input type="range"
    :class="className"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :value="currentValue"
    @change="handleChange">
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/slider/slider';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-slider',
  mixins: [mdlMixin],
  model: {
    prop: 'model',
    event: EVENT_CHANGE
  },
  props: {
    // state
    model: {
      type: Number,
      default: 0
    },
    // element attributes
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 1
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $slider: null,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdl-slider': true,
        'mdl-js-slider': true,
        'mdl-slider--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleChange() {
      let newValue = +this.$slider.element_.value;
      this.$slider.change(newValue); // modify the value
      this.$emit(EVENT_CHANGE, newValue);
    }
  },
  mounted() {
    if (!this.$slider) {
      this.$mdl.upgradeElement(this.$el, 'MaterialSlider');
      this.$slider = this.$el.MaterialSlider;
      this.$slider.value = this.currentValue; // initial value
    }
  }
};
</script>
