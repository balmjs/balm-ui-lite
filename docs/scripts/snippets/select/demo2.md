```html
<ui-select :options="provinces" :model="formData.province"
  optionKey="key" optionValue="value"
  defaultKey="0" defaultValue="Select province..."
  @change="balmUI.onChange('formData.province', $event, initCitySelectd($event))"></ui-select>

<ui-select :options="cities" :model="formData.city"
  optionKey="key" optionValue="value"
  defaultKey="0" defaultValue="Select city..."
  @change="balmUI.onChange('formData.city', $event)"></ui-select>
```

```js
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
  data() {
    return {
      formData: {
        province: 0,
        city: 0
      },
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
    initCitySelectd(key) {
      this.cities = key ? CITIES[key] : [];
      this.formData.city = this.cities.length ? this.cities[0].key : 0;
    }
  }
};
```
