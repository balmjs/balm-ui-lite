export default {
  props: {
    // ui attributes
    largeScreenOnly: {
      type: Boolean,
      default: false
    },
    smallScreenOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    screenClassName() {
      return {
        'mdl-layout--large-screen-only': this.largeScreenOnly, // Hides an element on smaller screens
        'mdl-layout--small-screen-only': this.smallScreenOnly // Hides an element on larger screens
      };
    }
  }
};
