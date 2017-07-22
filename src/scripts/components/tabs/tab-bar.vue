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
    effect: {
      type: Boolean,
      default: false
    },
    position: String
  },
  computed: {
    className() {
      return {
        'mdl-tabs__tab-bar': true,
        'mdl-tabs--tab-left': this.position && this.position.toLowerCase() === POSITION_LEFT,
        'mdl-tabs--tab-right': this.position && this.position.toLowerCase() === POSITION_RIGHT
      };
    }
  },
  methods: {
    handleChange(index) {
      this.$emit(EVENT_CHANGE, index);
    }
  }
};
</script>
