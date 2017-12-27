<template>
  <div class="page--datepicker">
    <div class="component-title">
      <h2>DatePicker 日期选择器</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 基本日期选择 + 默认图标</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-datepicker
              placeholder="Select Date.."
              toggle
              clear
              :config="config1"
              :model="date1"
              @change="balmUI.onChange('date1', $event)">
            </ui-datepicker>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 日期时间选择 + 自定义图标</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-datepicker
              placeholder="Select Datetime.."
              toggle
              clear
              :config="config2"
              :model="date2"
              @change="balmUI.onChange('date2', $event)">
              <template slot="toggle">
                <i class="fa fa-calendar"></i>
              </template>
              <template slot="clear">
                <i class="fa fa-close"></i>
              </template>
            </ui-datepicker>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>3. 简单时间范围选择（如需定制化时间范围选择推荐使用<router-link to="/components/rangepicker">&lt;ui-rangepicker&gt;</router-link>）</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-datepicker
              placeholder="Select Date Range.."
              :config="config3"
              :model="date3"
              @change="balmUI.onChange('date3', $event)"></ui-datepicker>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>4. 多时间选择</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-datepicker
              placeholder="Select Multi Date.."
              :config="config4"
              :model="date4"
              @change="balmUI.onChange('date4', $event)" ></ui-datepicker>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="datepicker"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import docs from '../../docs/components/datepicker.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-datepicker>'
  },
  data() {
    return {
      docs,
      config1: {
        defaultDate: 'today',
        // locale: this.flatpickrLang.cn
      },
      date1: '',
      config2: {
        enableTime: true
      },
      date2: '',
      config3: {
        mode: 'range'
      },
      date3: ['2017-11-10', '2017-11-20'],
      config4: {
        mode: 'multiple'
      },
      date4: ['2017-11-05', '2017-11-15', '2017-11-25']
    };
  },
  created() {
    this.showCode('datepicker', 4);
  }
};
</script>
