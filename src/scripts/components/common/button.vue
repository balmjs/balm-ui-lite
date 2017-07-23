<template>
  <button :class="className" :type="type">
    <slot>
      <i v-if="icon" class="material-icons">{{ icon }}</i>
    </slot>
  </button>
</template>

<script>
import '../../../material-design-lite/button/button';
import '../../../material-design-lite/ripple/ripple';

export default {
  name: 'ui-button',
  props: {
    // element attributes
    type: {
      type: String,
      default: 'button'
    },
    // ui attributes
    raised: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    miniFab: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [Boolean, String],
      default: false
    },
    colored: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    effect: {
      type: Boolean,
      default: false
    },
    // extension
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-button': true,
        'mdl-js-button': true,
        'mdl-button--raised': this.raised, // Applies raised display effect
        'mdl-button--fab': this.fab, // Applies fab (circular) display effect
        'mdl-button--mini-fab': this.miniFab, // Applies mini-fab (small fab circular) display effect
        'mdl-button--icon': this.icon, // Applies icon (small plain circular) display effect
        'mdl-button--colored': this.colored, // Applies colored display effect (primary or accent color, depending on the type of button)
        'mdl-button--primary': this.primary, // Applies primary color display effect
        'mdl-button--accent': this.accent, // Applies accent color display effect
        'mdl-js-ripple-effect': this.effect, // Applies ripple click effect
        'mdl-button--link': this.link
      };
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialButton');
    if (this.effect) {
      this.$mdl.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
