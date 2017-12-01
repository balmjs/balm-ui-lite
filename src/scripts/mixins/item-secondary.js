export default {
  created() {
    if (!this.$parent.hasMultiLine) {
      console.warn('The item requires multi-line.');
    }
  }
};
