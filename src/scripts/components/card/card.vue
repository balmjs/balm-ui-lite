<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const SHADOW_DEPTHS = [2, 3, 4, 6, 8, 16];

export default {
  name: 'ui-card',
  props: {
    // ui attributes
    shadow: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    shadowClassName() {
      // Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to card
      return SHADOW_DEPTHS.indexOf(+this.shadow) > -1
        ? `mdl-shadow--${this.shadow}dp`
        : '';
    },
    className() {
      return ['mdl-card', this.shadowClassName];
    }
  }
};
</script>
