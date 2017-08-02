import '../../material-design-lite/mdlComponentHandler';

export default {
  data() {
    return {
      $mdl: window.componentHandler
    };
  },
  created() {
    if (!this.$mdl) {
      this.$mdl = window.componentHandler;
    }
  }
};
