<template>
  <div class="mdl-select">
    <select class="mdl-select__surface"
      v-model="currentValue"
      @change="handleChange">
      <!-- Default value -->
      <option v-if="defaultValue"
        :value="defaultKey"
        selected>{{ defaultValue }}</option>
      <!-- Option list -->
      <option v-for="(option, index) in currentOptions"
        :key="index"
        :value="option[optionKey]">{{ option[optionValue] }}</option>
    </select>
    <div class="mdl-select__bottom-line"></div>
  </div>
</template>

<script>
import selectMixin from '../../mixins/select';

const EVENT_CHANGE = 'change'; // return option[optionKey]
const EVENT_SELECTED = 'selected'; // return option

export default {
  name: 'ui-select',
  mixins: [selectMixin],
  computed: {
    currentOption() {
      return this.currentOptions.find(
        option => option[this.optionKey] == this.currentValue
      );
    }
  },
  watch: {
    options(val) {
      this.currentOptions = val;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue); // value: number|string
      this.$emit(EVENT_SELECTED, Object.assign({}, this.currentOption)); // result: any
    },
    init() {
      if (!this.defaultValue && this.currentOptions.length) {
        let defaultOption = {};

        defaultOption = this.currentValue
          ? this.currentOption
          : this.currentOptions[0];

        this.$emit(EVENT_CHANGE, defaultOption[this.optionKey]); // value: number|string
      }
    }
  }
};
</script>
