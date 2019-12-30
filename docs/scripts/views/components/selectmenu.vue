<template>
  <div class="page--selectmenu">
    <div class="component-title">
      <h2>
        Select Menu 下拉菜单 (Moile端 更推荐使用<router-link
          to="/components/select"
          >Select</router-link
        >)
      </h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认下拉选择</h4>
    <div class="snippet-group">
      <div class="snippet-demos">
        <div class="snippet-demo-padding"></div>
        <div class="snippet-demo">
          <ui-selectmenu
            :options="options"
            v-model="formData.selected"
            optionKey="key"
            optionValue="value"
            @selected="balmUI.onChange('currentOption', $event)"
          ></ui-selectmenu>
        </div>
        <div class="snippet-demo-padding"></div>
      </div>
      <div class="snippet-captions">
        <div class="snippet-caption-padding"></div>
        <div class="snippet-caption">
          @change: {{ formData.selected }}<br />
          @selected: {{ currentOption }}
        </div>
        <div class="snippet-caption-padding"></div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 级联选择</h4>
    <div class="snippet-group">
      <div class="snippet-demos">
        <div class="snippet-demo-padding"></div>
        <div class="snippet-demo">
          <ui-selectmenu
            :options="provinces"
            :model="formData.province"
            optionKey="key"
            optionValue="value"
            defaultKey="0"
            defaultValue="Select province..."
            @change="
              balmUI.onChange(
                'formData.province',
                $event,
                initCitySelectd($event)
              )
            "
          ></ui-selectmenu>
        </div>
        <div class="snippet-demo">
          <ui-selectmenu
            :options="cities"
            v-model="formData.city"
            optionKey="key"
            optionValue="value"
            defaultKey="0"
            defaultValue="Select city..."
          ></ui-selectmenu>
        </div>
        <div class="snippet-demo-padding"></div>
      </div>
      <div class="snippet-captions">
        <div class="snippet-caption-padding"></div>
        <div class="snippet-caption">Province: {{ formData.province }}</div>
        <div class="snippet-caption">City: {{ formData.city }}</div>
        <div class="snippet-caption-padding"></div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="selectmenu"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const OPTIONS = [
  {
    key: 1,
    value: 'item 1'
  },
  {
    key: 2,
    value: 'item 2'
  },
  {
    key: 3,
    value: 'item 3'
  }
];

const PROVINCES = [
  {
    key: 1,
    value: 'Jiangsu'
  },
  {
    key: 2,
    value: 'Zhejiang'
  },
  {
    key: 3,
    value: 'Shanghai'
  }
];

const CITIES = [
  [],
  [
    {
      key: 3201,
      value: 'Nanjing'
    },
    {
      key: 3204,
      value: 'Changzhou'
    }
  ],
  [
    {
      key: 3301,
      value: 'Hangzhou'
    },
    {
      key: 3302,
      value: 'Ningbo'
    }
  ],
  [
    {
      key: 310101,
      value: 'Huangpu'
    },
    {
      key: 310104,
      value: 'Xuhui'
    }
  ]
];

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-selectmenu>'
  },
  data() {
    return {
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
    this.showCode('selectmenu', 2);
  }
};
</script>
