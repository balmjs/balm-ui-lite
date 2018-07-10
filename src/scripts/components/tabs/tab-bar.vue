<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const POSITION_LEFT = 'left';
const POSITION_RIGHT = 'right';
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-tab-bar',
  props: {
    // ui attributes
    noRipple: {
      type: Boolean,
      default: false
    },
    position: String
  },
  computed: {
    className() {
      let result = ['mdl-tabs__tab-bar'];

      if ([POSITION_LEFT, POSITION_RIGHT].indexOf(this.position) > -1) {
        result.push(`mdl-tabs--tab-${this.position}`);
      }

      return result;
    }
  },
  methods: {
    handleChange(index) {
      this.$emit(EVENT_CHANGE, +index);

      this.$parent.$nextTick(() => {
        this.$parent.$emit(EVENT_CHANGE, +index);
      });
    }
  }
};
</script>
