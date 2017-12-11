<template>
  <header :class="className">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ui-card-head',
  props: {
    // ui attributes
    expand: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-card__title': true,
        'mdl-card--expand': this.expand
      };
    }
  }
};
</script>
