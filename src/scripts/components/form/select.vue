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

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-select',
  props: {
    // state
    model: null,
    // ui attributes
    options: {
      required: true,
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
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue);
    },
    init() {
      if (!this.defaultValue && this.currentOptions.length) {
        let defaultOption = {};

        defaultOption = this.currentValue
          ? this.currentOptions.find(option => option[this.optionKey] == this.currentValue)
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
