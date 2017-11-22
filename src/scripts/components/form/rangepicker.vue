<template>
  <div class="mdl-rangepicker">
    <ui-datepicker
      :config="config"
      :model="startDate"
      :placeholder="startPlaceholder"
      @change="handleChange('startDate', $event)"></ui-datepicker>
    <slot name="separator">
      <span class="mdl-rangepicker__separator">~</span>
    </slot>
    <ui-datepicker
      :config="config"
      :model="endDate"
      :placeholder="endPlaceholder"
      @change="handleChange('endDate', $event)"></ui-datepicker>
  </div>
</template>

<script>
import {isArray} from '../../helpers';
import UiDatepicker from './datepicker';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-rangepicker',
  components: {
    UiDatepicker
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
    startPlaceholder: String,
    endPlaceholder: String
  },
  data() {
    return {
      startDate: '',
      endDate: ''
    }
  },
  watch: {
    model(val) {
      this.init(val);
    }
  },
  mounted() {
    this.init(this.model);
  },
  methods: {
    init(selectedDates) {
      if (isArray(selectedDates)) {
        if (selectedDates.length === 2) {
          this.startDate = selectedDates[0];
          this.endDate = selectedDates[1];
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      }
    },
    handleChange(field, value) {
      this[field] = value;
      this.$emit(EVENT_CHANGE, [this.startDate, this.endDate]);
    }
  }
};
</script>
