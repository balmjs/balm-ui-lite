<template>
  <div class="page--select">
    <div class="component-title">
      <h3>Select 下拉框 (Desktop端 更推荐使用<router-link to="/components/selectmenu">Selectmenu</router-link>)</h3>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认下拉选择</h4>
    <div class="snippet-group">
      <div class="snippet-demos">
        <div class="snippet-demo-padding"></div>
        <div class="snippet-demo">
          <ui-select :options="options" :model="formData.selected"
            optionKey="key" optionValue="value"
            @change="balmUI.onChange('formData.selected', $event)"
            @selected="balmUI.onChange('currentOption', $event)"></ui-select>
        </div>
        <div class="snippet-demo-padding"></div>
      </div>
      <div class="snippet-captions">
        <div class="snippet-caption-padding"></div>
        <div class="snippet-caption">
          @change: {{ formData.selected }}<br>
          @selected: {{ currentOption }}
        </div>
        <div class="snippet-caption-padding"></div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. 级联选择</h4>
    <div class="snippet-group">
      <div class="snippet-demos">
        <div class="snippet-demo-padding"></div>
        <div class="snippet-demo">
          <ui-select :options="provinces" :model="formData.province"
            optionKey="key" optionValue="value"
            defaultKey="0" defaultValue="Select province..."
            @change="balmUI.onChange('formData.province', $event, initCitySelectd($event))"></ui-select>
        </div>
        <div class="snippet-demo">
          <ui-select :options="cities" :model="formData.city"
            optionKey="key" optionValue="value"
            defaultKey="0" defaultValue="Select city..."
            @change="balmUI.onChange('formData.city', $event)"></ui-select>
        </div>
        <div class="snippet-demo-padding"></div>
      </div>
      <div class="snippet-captions">
        <div class="snippet-caption-padding"></div>
        <div class="snippet-caption">Province: {{ formData.province }}</div>
        <div class="snippet-caption">City: {{ formData.city }}</div>
        <div class="snippet-caption-padding"></div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="select"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import docs from '../../docs/components/select.md';

const OPTIONS = [{
  key: 1,
  value: 'item 1'
}, {
  key: 2,
  value: 'item 2'
}, {
  key: 3,
  value: 'item 3'
}];

const PROVINCES = [{
  key: 1,
  value: 'Jiangsu'
}, {
  key: 2,
  value: 'Zhejiang'
}, {
  key: 3,
  value: 'Shanghai'
}];

const CITIES = [
  [],
  [{
    key: 3201,
    value: 'Nanjing'
  }, {
    key: 3204,
    value: 'Changzhou'
  }],
  [{
    key: 3301,
    value: 'Hangzhou'
  }, {
    key: 3302,
    value: 'Ningbo'
  }],
  [{
    key: 310101,
    value: 'Huangpu'
  }, {
    key: 310104,
    value: 'Xuhui'
  }]
];

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-select>'
  },
  data() {
    return {
      docs,
      formData: {
        selected: 1,
        province: 0,
        city: 0
      },
      currentOption: {},
      options: OPTIONS,
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    initCitySelectd(key) {
      this.cities = key ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].key : 0;
    }
  },
  created() {
    this.showCode('select', 2);
  }
};
</script>
