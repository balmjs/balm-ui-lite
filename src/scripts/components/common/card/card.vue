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
    // Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to card
    dp: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    shadowClassName() {
      return (SHADOW_DEPTHS.indexOf(+this.dp) > -1) ? `mdl-shadow--${this.dp}dp` : '';
    },
    className() {
      return [
        'mdl-card',
        this.shadowClassName
      ];
    }
  }
};
</script>
