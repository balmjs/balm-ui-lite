<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-layout-tab-bar',
  props: {
    manualSwitch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-layout__tab-bar': true,
        // 'mdl-js-ripple-effect': true,
        'mdl-layout__tab-manual-switch': this.manualSwitch // Disables tab switching when clicking on tab separators. Useful for disabling default behavior and setting up your own event listeners.
      };
    }
  }
};
</script>
