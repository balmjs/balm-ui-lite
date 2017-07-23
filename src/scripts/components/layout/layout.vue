<template>
  <div :class="className">
    <slot name="header"></slot>
    <slot name="drawer"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import '../../../material-design-lite/layout/layout';
import '../../../material-design-lite/ripple/ripple';

export default {
  name: 'ui-layout',
  props: {
    fixedDrawer: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    noDrawerButton: {
      type: Boolean,
      default: false
    },
    noDesktopDrawerButton: {
      type: Boolean,
      default: false
    },
    largeScreenOnly: {
      type: Boolean,
      default: false
    },
    smallScreenOnly: {
      type: Boolean,
      default: false
    },
    fixedTabs: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-layout': true,
        'mdl-js-layout': true,
        'mdl-layout--fixed-drawer': this.fixedDrawer, // Makes the drawer always visible and open in larger screens
        'mdl-layout--fixed-header': this.fixedHeader, // Makes the header always visible, even in small screens
        'mdl-layout--no-drawer-button': this.noDrawerButton, // Does not display a drawer button
        'mdl-layout--no-desktop-drawer-button': this.noDesktopDrawerButton, // Does not display a drawer button in desktop mode
        'mdl-layout--large-screen-only': this.largeScreenOnly, // Hides an element on smaller screens
        'mdl-layout--small-screen-only': this.smallScreenOnly, // Hides an element on larger screens
        'mdl-layout--fixed-tabs': this.fixedTabs // Uses fixed tabs instead of the default scrollable tabs
      };
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialLayout');
    if (this.tabs) {
      // this.$mdl.upgradeElement(this.$refs.tabs, 'MaterialRipple');
    }
  }
};
</script>
