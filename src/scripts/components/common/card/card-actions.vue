<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card-actions',
  props: {
    // Adds a border to the card section that it's applied to
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-card__actions': true,
        'mdl-card--border': this.border
      };
    }
  }
};
</script>
