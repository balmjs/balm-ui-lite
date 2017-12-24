export default {
  mounted() {
    if (!this.$parent.$parent.hasMultiLine) {
      console.warn('The item requires multi-line.');
    }
  }
};
