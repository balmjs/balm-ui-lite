<template>
  <div class="page--rangepicker">
    <div class="component-title">
      <h3>RangePicker</h3>
    </div>

    <div class="snippet-demo mdl-rangepicker-container">
      <ui-tabs :active="diffDayTab">
        <ui-tab-bar @change="onChangeDiffDay">
          <ui-tab v-for="(item, index) in DIFF_TABS" :key="index">
            {{ item }}
          </ui-tab>
        </ui-tab-bar>
      </ui-tabs>
      <ui-rangepicker
        :model="searchFormData.date"
        startPlaceholder="Start date"
        endPlaceholder="End date"
        @change="onChangePicker"></ui-rangepicker>
    </div>
    <p>
      {{ searchFormData.date }}
      <ui-button @click="onReset">Reset</ui-button>
    </p>
    <!-- <ui-markdown :text="code[0]"></ui-markdown> -->

    <!-- <ui-apidoc name="rangepicker"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';
import {date, strtotime, time} from '../helpers';

const DIFF_DAY_1 = 0;
const DIFF_DAY_7 = 6;
const DIFF_DAY_30 = 29;
const DIFF_DAYS = [
  DIFF_DAY_1,
  DIFF_DAY_7,
  DIFF_DAY_30
];
const DIFF_TABS = [
  '今天',
  '7天',
  '30天'
];
const TODAY = date('Y-m-d', time());

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - RangePicker'
  },
  data() {
    return {
      DIFF_TABS,
      diffDayTab: 0,
      searchFormData: {
        date: [TODAY, TODAY]
      }
    };
  },
  created() {
    // this.showCode('rangepicker', 1);
  },
  methods: {
    // 切换选项卡时同步输入框
    syncDateTabs(tab) {
      let diffDay = DIFF_DAYS[tab];
      let today = time();
      let startDate = '';
      let endDate = date('Y-m-d', today);
      if (diffDay === DIFF_DAY_1) {
        startDate = endDate;
      } else {
        startDate = date('Y-m-d', strtotime(`-${diffDay} day`, today));
      }
      this.searchFormData.date = [startDate, endDate];
    },
    // 改变输入框时同步选项卡
    syncDatePicker(value) {
      if (value[0] && value[1]) {
        let startDate = value[0];
        let endDate = value[1];
        let diffDay = (strtotime(endDate) - strtotime(startDate)) / 86400;
        if (DIFF_DAYS.includes(diffDay)) {
          this.diffDayTab = DIFF_DAYS.findIndex(day => day === diffDay);
        } else {
          this.diffDayTab = -1;
        }
      }
    },
    onChangeDiffDay(tab) {
      this.diffDayTab = tab;
      this.syncDateTabs(tab);
    },
    onChangePicker(value) {
      this.searchFormData.date = value;
      this.syncDatePicker(value);
    },
    onReset() {
      this.diffDayTab = 0;
      this.searchFormData = {
        date: [TODAY, TODAY]
      };
    }
  }
};
</script>
