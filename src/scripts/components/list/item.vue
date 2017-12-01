<template>
  <li :class="className">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'ui-item',
  computed: {
    className() {
      return {
        'mdl-list__item': true,
        'mdl-list__item--two-line': this.$parent.twoLine,
        'mdl-list__item--three-line': this.$parent.threeLine
      };
    },
    hasMultiLine() {
      return this.$parent.twoLine || this.$parent.threeLine;
    }
  }
};
</script>
