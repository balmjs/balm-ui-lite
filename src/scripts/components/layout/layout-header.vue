<template>
  <header :class="className">
    <div class="mdl-layout-icon">
      <slot name="icon"></slot>
    </div>
    <slot><!-- header rows --></slot>
  </header>
</template>

<script>
export default {
  name: 'ui-layout-header',
  props: {
    // ui attributes
    scroll: {
      type: Boolean,
      default: false
    },
    waterfall: {
      type: Boolean,
      default: false
    },
    waterfallHideTop: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    seamed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-layout__header': true,
        'mdl-layout__header--scroll': this.scroll, // Makes the header scroll with the content
        'mdl-layout__header--waterfall': this.waterfall || this.waterfallHideTop, // Allows a "waterfall" effect with multiple header lines
        'mdl-layout__header--waterfall-hide-top': this.waterfallHideTop, // Hides the top rather than the bottom rows on a waterfall header
        'mdl-layout__header--transparent': this.transparent, // Makes header transparent (draws on top of layout background)
        'mdl-layout__header--seamed': this.seamed // Uses a header without a shadow
      };
    }
  }
};
</script>
