<template>
  <div class="mdl-list__item-secondary-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-item-secondary',
  mounted() {
    if (!this.$parent.hasMultiLine) {
      console.warn('The item requires multi-line.');
    }
  }
};
</script>
