<template>
  <div class="page--rangepicker">
    <div class="component-title">
      <h2>RangePicker 日期范围选择</h2>
    </div>

    <!-- <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>-->

    <h4>1. 简单选择</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-rangepicker
          :model="date1"
          startPlaceholder="Start date"
          endPlaceholder="End date"
          @change="balmUI.onChange('date1', $event, doSomething)"
          @error="onError"
        ></ui-rangepicker>
        Choose date range: {{ date1 }}
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 高级选择</h4>
    <p>
      <ui-checkbox v-model="reverseSelection">反向选择</ui-checkbox>
    </p>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-rangepicker
          v-model="date2"
          :options="options"
          startPlaceholder="Start date"
          endPlaceholder="End date"
          :reverseSelection="reverseSelection"
        ></ui-rangepicker>
        <p>Choose date range: {{ date2 }}</p>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="rangepicker"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import { date, time } from '../../helpers';
import docs from '../../docs/components/rangepicker.md';

const TODAY = date('Y-m-d', time());

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-rangepicker>'
  },
  data() {
    return {
      docs,
      // dateConfig: {
      //   locale: this.flatpickrLang.cn,
      //   defaultDate: 'today',
      //   dateFormat: 'Y-m-d H:i',
      //   enableTime: true,
      //   maxDate: Date.now()
      // },
      date1: [],
      date2: [TODAY, TODAY],
      options: [
        {
          key: 0,
          value: 'Today'
        },
        {
          key: 6,
          value: '7 Days'
        },
        {
          key: 29,
          value: '30 Days'
        }
      ],
      reverseSelection: false
    };
  },
  created() {
    this.showCode('rangepicker', 2);
  },
  methods: {
    doSomething() {
      console.log('gg');
    },
    onError(msg) {
      console.log(msg);
    }
  }
};
</script>
