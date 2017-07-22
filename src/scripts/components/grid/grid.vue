<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-grid',
  props: {
    // ui attributes
    noSpacing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-grid': true,
        'mdl-grid--no-spacing': this.noSpacing
      };
    }
  }
};
</script>
