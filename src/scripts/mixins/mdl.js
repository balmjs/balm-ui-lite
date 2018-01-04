import '../../material-design-lite/mdlComponentHandler';

// Just for node (2018.01.04 by Elf-mousE)
const isNode = Object.prototype.toString.call(typeof global['process'] !== 'undefined' ? global['process'] : 0) === '[object process]';
if (isNode && global['process'].env.NODE_ENV === 'test') {
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
