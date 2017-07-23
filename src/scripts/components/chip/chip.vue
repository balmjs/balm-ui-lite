<template>
  <span :class="className">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'ui-chip',
  props: {
    // ui attributes
    contact: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-chip': true,
        'mdl-chip--contact': this.contact,
        'mdl-chip--deletable': this.action
      };
    }
  }
};
</script>
