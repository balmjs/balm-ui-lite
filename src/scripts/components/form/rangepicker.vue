<template>
  <div :class="className">
    <ui-tabs v-if="currentOptions.length" class="mdl-rangepicker__tabs" :active="tab">
      <ui-tab-bar @change="handleTabsChange">
        <ui-tab v-for="(option, index) in currentOptions" :key="index">{{ option.value }}</ui-tab>
      </ui-tab-bar>
    </ui-tabs>
    <div class="mdl-rangepicker__input">
      <ui-datepicker
        :config="config"
        :model="startDate"
        :placeholder="startPlaceholder"
        @change="handlePickerChange(DATE_FIELD.START, $event)"
      ></ui-datepicker>
      <slot name="separator">
        <span class="mdl-rangepicker__separator">~</span>
      </slot>
      <ui-datepicker
        :config="config"
        :model="endDate"
        :placeholder="endPlaceholder"
        @change="handlePickerChange(DATE_FIELD.END, $event)"
      ></ui-datepicker>
    </div>
  </div>
</template>

<script>
import getType from '../../helpers/typeof';
import UiDatepicker from './datepicker';
import { date, strtotime, time } from '../../helpers/datetime';

const ONE_DAY = 86400;
const DATE_FIELD = {
  START: 'startDate',
  END: 'endDate'
};
const EVENT_CHANGE = 'change';
const EVENT_ERROR = 'error';

export default {
  name: 'ui-rangepicker',
  components: {
    UiDatepicker
  },
  model: {
    prop: 'model',
    event: EVENT_CHANGE
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
    endPlaceholder: String,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    reverseSelection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      DATE_FIELD,
      tab: 0,
      currentOptions: this.options,
      startDate: '',
      endDate: ''
    };
  },
  computed: {
    className() {
      return {
        'mdl-rangepicker': true,
        'mdl-rangepicker--full-width': this.currentOptions.length
      };
    }
  },
  watch: {
    model(val) {
      this.init(val);
    },
    options(val) {
      this.currentOptions = val;
    }
  },
  mounted() {
    this.init(this.model);
  },
  methods: {
    init(selectedDates) {
      if (getType(selectedDates) === 'array') {
        if (selectedDates.length === 2) {
          this[DATE_FIELD.START] = selectedDates[0];
          this[DATE_FIELD.END] = selectedDates[1];
        } else {
          this[DATE_FIELD.START] = '';
          this[DATE_FIELD.END] = '';
        }
      }
    },
    handleTabsChange(tab) {
      this.tab = tab;
      this.syncDatepicker(tab);
      this.$emit(EVENT_CHANGE, [this[DATE_FIELD.START], this[DATE_FIELD.END]]);
    },
    verifyDateRange(field, value) {
      let curStartDate;
      let curEndDate;

      if (field === DATE_FIELD.START) {
        curStartDate = value;
        curEndDate = this[DATE_FIELD.END];
      } else {
        curStartDate = this[DATE_FIELD.START];
        curEndDate = value;
      }

      return strtotime(curStartDate) && strtotime(curEndDate)
        ? strtotime(curStartDate) <= strtotime(curEndDate)
        : true;
    },
    handlePickerChange(field, value) {
      if (this.verifyDateRange(field, value)) {
        this[field] = value;
        this.syncTabs(this[DATE_FIELD.START], this[DATE_FIELD.END]);
        this.$emit(EVENT_CHANGE, [
          this[DATE_FIELD.START],
          this[DATE_FIELD.END]
        ]);
      } else {
        this.$emit(EVENT_ERROR, 'Invalid Date');
      }
    },
    // 切换选项卡时同步输入框
    syncDatepicker(tab) {
      let diffOption = this.currentOptions[tab];
      let today = time();

      if (this.reverseSelection) {
        if (this[DATE_FIELD.END]) {
          today = strtotime(this[DATE_FIELD.END]);
        } else {
          this[DATE_FIELD.END] = date('Y-m-d', today);
        }

        this[DATE_FIELD.START] =
          diffOption.key === 0
            ? this[DATE_FIELD.END]
            : date('Y-m-d', strtotime(`-${diffOption.key} day`, today));
      } else {
        if (this[DATE_FIELD.START]) {
          today = strtotime(this[DATE_FIELD.START]);
        } else {
          this[DATE_FIELD.START] = date('Y-m-d', today);
        }

        this[DATE_FIELD.END] =
          diffOption.key === 0
            ? this[DATE_FIELD.START]
            : date('Y-m-d', strtotime(`+${diffOption.key} day`, today));
      }
    },
    // 改变输入框时同步选项卡
    syncTabs(curStartDate, curEndDate) {
      if (curStartDate && curEndDate) {
        let diffDay =
          (strtotime(curEndDate) - strtotime(curStartDate)) / ONE_DAY;

        this.tab = this.currentOptions.findIndex(
          option => option.key === diffDay
        );
      }
    }
  }
};
</script>
