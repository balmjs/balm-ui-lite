<template>
  <input type="range"
    :class="className"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    v-model="currentValue"
    @change="handleChange">
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/slider/slider';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-slider',
  mixins: [mdlMixin],
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
      this.$emit(EVENT_CHANGE, +this.currentValue); // currentValue: number
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialSlider');
  }
};
</script>
