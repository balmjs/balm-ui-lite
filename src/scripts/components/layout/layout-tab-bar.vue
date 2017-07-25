<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import '../../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-layout-tab-bar',
  props: {
    // ui attributes
    noRipple: {
      type: Boolean,
      default: false
    },
    manualSwitch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: [],
      panels: []
    };
  },
  computed: {
    className() {
      return {
        'mdl-layout__tab-bar': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-layout__tab-manual-switch': this.manualSwitch // Disables tab switching when clicking on tab separators. Useful for disabling default behavior and setting up your own event listeners.
      };
    }
  },
  methods: {
    handleChange(index) {
      this.$emit(EVENT_CHANGE, index);
    }
  },
  mounted() {
    if (!this.noRipple) {
      window.setTimeout(() => {
        this.$nextTick(() => {
          this.$mdl.upgradeElement(this.$el, 'MaterialRipple');
        });
      }, 1);
    }
  }
};
</script>
