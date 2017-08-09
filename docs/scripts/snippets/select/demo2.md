```html
<ui-select :options="provinces" :model="formData.province"
           optionKey="key" optionValue="value"
           defaultKey="0" defaultValue="Select province..."
           @change="onSelectChange('province', $event, changeCity)"></ui-select>

<ui-select :options="cities" :model="formData.city"
           optionKey="key" optionValue="value"
           defaultKey="0" defaultValue="Select city..."
           @change="onSelectChange('city', $event)"></ui-select>
```

```js
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
  data() {
    return {
      province: 0,
      city: 0,
      provinces: PROVINCES,
      cities: []
    };
  },
  methods: {
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
  }
};
```
