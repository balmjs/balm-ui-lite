<template>
  <li :class="className">
    <slot name="before"></slot>
    <div class="mdl-list__item-primary-content">
      <slot></slot>
    </div>
    <div v-if="hasMultiLine" class="mdl-list__item-secondary-content">
      <slot name="action"></slot>
    </div>
    <template v-else>
      <slot name="action"></slot>
    </template>
    <slot name="after"></slot>
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
