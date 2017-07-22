export default {
  props: {
    noBackground: {
      type: Boolean,
      default: false
    },
    overlap: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    className() {
      return {
        'mdl-badge': true, // Required on span or link
        'mdl-badge--no-background': this.noBackground, // Applies open-circle effect to badge
        'mdl-badge--overlap': this.overlap, // Make the badge overlap with its container
        'no-badge': !this.value // Assigns string value to badge
      };
    }
  }
};
