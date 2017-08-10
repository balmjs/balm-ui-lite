<template>
  <select class="mdl-select"
    v-model="currentValue"
    @change="handleChange">
    <!-- Default value -->
    <option v-if="defaultValue"
      :value="defaultKey"
      selected>{{ defaultValue }}</option>
    <!-- Option list -->
    <option v-for="option in currentOptions"
      :value="option[optionKey]">{{ option[optionValue] }}</option>
  </select>
</template>

<script>
import {isObject} from '../../helpers';

const EVENT_CHANGE = 'change'; // return option[optionKey]
const EVENT_SELECTED = 'selected'; // return option

export default {
  name: 'ui-select',
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
    },
    options(val) {
      this.currentOptions = val;
    }
  },
  computed: {
    currentOption() {
      return this.currentOptions.find(option => option[this.optionKey] == this.currentValue);
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue);
      this.$emit(EVENT_SELECTED, Object.assign({}, this.currentOption));
    },
    init() {
      if (!this.defaultValue && this.currentOptions.length) {
        let defaultOption = {};

        defaultOption = this.currentValue
          ? this.currentOption
          : this.currentOptions[0];

        this.$emit(EVENT_CHANGE, defaultOption[this.optionKey]);
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>
