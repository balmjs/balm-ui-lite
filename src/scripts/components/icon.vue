<template>
  <i :class="className" aria-hidden="true">
    <slot></slot>
  </i>
</template>

<script>
const DEFAULT_SIZE = 24;
export default {
  name: 'ui-icon',
  props: {
    // ui attributes
    size: {
      type: [Number, String],
      default: DEFAULT_SIZE
    }
  },
  computed: {
    className() {
      let result = {
        'material-icons': true
      };
      if (+this.size !== DEFAULT_SIZE && this.size > 0) {
        result[`md-${this.size}`] = true;
      }
      return result;
    }
  }
};
</script>
