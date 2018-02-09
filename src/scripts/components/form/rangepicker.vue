<template>
  <div :class="className">
    <ui-tabs v-if="currentOptions.length"
      class="mdl-rangepicker__tabs"
      :active="tab">
      <ui-tab-bar @change="handleTabsChange">
        <ui-tab v-for="(option, index) in currentOptions" :key="index">
          {{ option.value }}
        </ui-tab>
      </ui-tab-bar>
    </ui-tabs>
    <div class="mdl-rangepicker__input">
      <ui-datepicker
        :config="config"
        :model="startDate"
        :placeholder="startPlaceholder"
        @change="handlePickerChange('startDate', $event)"></ui-datepicker>
      <slot name="separator">
        <span class="mdl-rangepicker__separator">~</span>
      </slot>
      <ui-datepicker
        :config="config"
        :model="endDate"
        :placeholder="endPlaceholder"
        @change="handlePickerChange('endDate', $event)"></ui-datepicker>
    </div>
  </div>
</template>

<script>
import getType from '../../helpers/typeof';
import UiDatepicker from './datepicker';
import { date, strtotime, time } from '../../helpers/datetime';

const ONE_DAY = 86400;
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
    endPlaceholder: String,
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
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
          this.startDate = selectedDates[0];
          this.endDate = selectedDates[1];
        } else {
          this.startDate = '';
          this.endDate = '';
        }
      }
    },
    handleTabsChange(tab) {
      this.tab = tab;
      this.syncDatepicker(tab);
      this.$emit(EVENT_CHANGE, [this.startDate, this.endDate]);
    },
    handlePickerChange(field, value) {
      this[field] = value;
      this.syncTabs(this.startDate, this.endDate);
      this.$emit(EVENT_CHANGE, [this.startDate, this.endDate]);
    },
    // 切换选项卡时同步输入框
    syncDatepicker(tab) {
      let diffOption = this.currentOptions[tab];
      let today = time();

      this.startDate =
        diffOption.key === 0
          ? this.endDate
          : date('Y-m-d', strtotime(`-${diffOption.key} day`, today));
      this.endDate = date('Y-m-d', today);
    },
    // 改变输入框时同步选项卡
    syncTabs(startDate, endDate) {
      if (startDate && endDate) {
        let diffDay = (strtotime(endDate) - strtotime(startDate)) / ONE_DAY;

        this.tab = this.currentOptions.findIndex(
          option => option.key === diffDay
        );
      }
    }
  }
};
</script>
