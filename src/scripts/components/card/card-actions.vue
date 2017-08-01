<template>
  <footer :class="className">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'ui-card-actions',
  props: {
    // ui attributes
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-card__actions': true,
        'mdl-card--border': this.border // Adds a border to the card section that it's applied to
      };
    }
  }
};
</script>
