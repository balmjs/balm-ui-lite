export default {
  props: {
    // state
    model: null,
    // ui attributes
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    optionKey: {
      type: String,
      default: 'value'
    },
    optionValue: {
      type: String,
      default: 'label'
    },
    defaultKey: {
      type: String,
      default: ''
    },
    defaultValue: String
  },
  data() {
    return {
      currentValue: this.model,
      currentOptions: this.options
    };
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  }
};
