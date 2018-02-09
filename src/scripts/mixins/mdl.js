import '../../material-design-lite/mdlComponentHandler';

// Just for node (2018.01.04 by Elf-mousE)
const isNode =
  Object.prototype.toString.call(
    typeof global['process'] !== 'undefined' ? global['process'] : 0
  ) === '[object process]';
const isTest = isNode && global['process'].env.NODE_ENV === 'test';

let MDL = window.componentHandler;
if (isTest) {
  global.componentHandler = MDL;
  MDL = global.componentHandler;
}

export default {
  data() {
    return {
      $mdl: MDL
    };
  },
  created() {
    if (!this.$mdl) {
      this.$mdl = MDL;
    }
  }
};
