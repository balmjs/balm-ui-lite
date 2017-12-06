export default {
  props: {
    // state
    value: {
      type: [Number, String],
      default: 0
    },
    // ui attributes
    icon: {
      type: Boolean,
      default: false
    },
    noBackground: {
      type: Boolean,
      default: false
    },
    overlap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'material-icons': this.icon,
        'mdl-badge': true, // Required on span or link
        'mdl-badge--no-background': this.noBackground, // Applies open-circle effect to badge
        'mdl-badge--overlap': this.overlap, // Make the badge overlap with its container
        'no-value': !this.value // Assigns string value to badge
      };
    }
  }
};
