import '../../material-design-lite/mdlComponentHandler';

// NOTE: Just for node (2018.01.04 by Elf-mousE)
if (global !== window) {
  global.componentHandler = window.componentHandler;
}

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
