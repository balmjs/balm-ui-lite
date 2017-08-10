<template>
  <div class="page--select">
    <div class="component-title">
      <h3>Select</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-select :options="options" :model="formData.selected"
          optionKey="key" optionValue="value"
          defaultKey="0" defaultValue="All items"
          @change="onChange('formData.selected', $event)"
          @selected="onOptionSelected"></ui-select>
        <span>selected key: {{ formData.selected }}</span>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-select :options="provinces" :model="formData.province"
          optionKey="key" optionValue="value"
          defaultKey="0" defaultValue="Select province..."
          @change="onSelectChange('province', $event, changeCity)"></ui-select>
      </div>
      <div class="snippet-demo">
        <ui-select :options="cities" :model="formData.city"
          optionKey="key" optionValue="value"
          defaultKey="0" defaultValue="Select city..."
          @change="onSelectChange('city', $event)"></ui-select>
        <span>Province: {{ formData.province }} - City: {{ formData.city }}</span>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="select"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

const OPTIONS = [{
  key: 1,
  value: 'item 1'
}, {
  key: 2,
  value: 'item 2'
}, {
  key: 3,
  value: 'item 3'
}, {
  key: 4,
  value: 'item 4'
}, {
  key: 5,
  value: 'item 5'
}, {
  key: 6,
  value: 'item 6'
}, {
  key: 7,
  value: 'item 7'
}, {
  key: 8,
  value: 'item 8'
}, {
  key: 9,
  value: 'item 9'
}, {
  key: 10,
  value: 'item 10'
}];

const PROVINCES = [{
  key: 1,
  value: 'Beijing'
}, {
  key: 2,
  value: 'Shanghai'
}, {
  key: 3,
  value: 'Guangzhou'
}];

const CITIES = [
  [],
  [{
    key: 1,
    value: 'Haiding'
  }, {
    key: 2,
    value: 'Chaoyang'
  }],
  [{
    key: 3,
    value: 'Huangpu'
  }, {
    key: 4,
    value: 'Xuhui'
  }],
  []
];

export default {
  mixins: [snippets],
  data() {
    return {
      edit: false,
      formData: {
        selected: 0,
        province: 0,
        city: 0
      },
      options: OPTIONS,
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    onOptionSelected(option) {
      console.log(option);
    },
    onSelectChange(field, value, fn) {
      this.formData[field] = value;
      if (value) {
        fn && fn(value);
      }
    },
    changeCity(key) {
      this.cities = key > -1 ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].key : 0;
    }
  },
  created() {
    this.showCode('select', 2);
  }
};
</script>
