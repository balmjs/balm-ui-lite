<template>
  <div class="mdl-datepicker">
    <ui-textfield
      ref="text"
      :model="currentValue"
      :placeholder="placeholder"
      :plus="(toggle || allowInput) || clear"
      @change="handleChange">
      <template slot="plus">
        <div v-if="toggle || allowInput" class="mdl-datepicker__toggle" data-toggle>
          <slot name="toggle">
            <i class="fa fa-calendar"></i>
          </slot>
        </div>
        <div v-if="clear" class="mdl-datepicker__clear" data-clear>
          <slot name="clear">
            <i class="fa fa-close"></i>
          </slot>
        </div>
      </template>
    </ui-textfield>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import UiTextfield from './textfield';
import {isArray} from '../../helpers';

const MODE_SINGLE = 'single';
const MODE_MULTIPLE = 'multiple';
const MODE_RANGE = 'range';
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-datepicker',
  components: {
    UiTextfield
  },
  props: {
    // state
    model: null,
    // ui attributes
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    placeholder: String,
    toggle: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      flatpickr: null,
      currentValue: this.model,
      mode: this.config.mode || MODE_SINGLE
    }
  },
  computed: {
    allowInput() {
      return this.config.allowInput;
    }
  },
  watch: {
    model(val) {
      if (this.mode === MODE_RANGE) {
        this.setRangeDate(val);
      } else {
        this.currentValue = val;
      }
      this.syncSelectedDates(this.currentValue);
    }
  },
  mounted() {
    if (!this.flatpickr) {
      // default config for ui
      this.config.time_24hr = true;
      this.config.wrap = true;
      this.config.clickOpens = !this.config.allowInput; // NOTE: fix flatpickr bug
      // custom event
      this.config.onClose = () => {
        this.$refs.text.$el.querySelector('input').blur();
      };
      // set default value
      switch (this.mode) {
        case MODE_MULTIPLE:
          this.config.defaultDate = this.currentValue;
          break;
        case MODE_RANGE:
          this.setRangeDate(this.model);
          this.config.defaultDate = this.currentValue;
          break;
        default:
          this.config.onReady = (selectedDates, dateStr, instance) => {
            // defaultDate: 'today'
            if (dateStr) {
              this.currentValue = dateStr;
              this.$emit(EVENT_CHANGE, dateStr);
            }
          };
          break;
      }
      // init
      this.flatpickr = new Flatpickr(this.$el, this.config);
    }
  },
  beforeDestroy() {
    this.flatpickr.destroy();
    this.flatpickr = null;
  },
  methods: {
    syncSelectedDates(value) {
      if (this.flatpickr) {
        this.flatpickr.setDate(value);
      }
    },
    handleChange(event) {
      this.currentValue = event.target.value;

      let result;
      switch (this.mode) {
        case MODE_MULTIPLE:
          let multipleValue = this.currentValue.replace(/\s,\s/, ',').split(',');
          result = (multipleValue.length === 1)
            ? multipleValue[0] // string
            : multipleValue; // array
          break;
        case MODE_RANGE:
          let rangeValue = this.currentValue.split(' to ');
          let startDate = rangeValue[0];
          let endDate = rangeValue[1];
          if (startDate && endDate) {
            result = (startDate === endDate)
              ? startDate // string
              : [startDate, endDate]; // array

            this.syncSelectedDates(result);
          }
          break;
        default:
          result = this.currentValue; // string
          break;
      }

      if (result) {
        this.$emit(EVENT_CHANGE, result);
      }
    },
    setRangeDate(selectedDates) {
      if (isArray(selectedDates) && selectedDates.length === 2) {
        let startDate = selectedDates[0];
        let endDate = selectedDates[1];
        this.currentValue = (startDate === endDate)
          ? startDate
          : `${startDate} to ${endDate}`;
      }
    }
  }
};
</script>
