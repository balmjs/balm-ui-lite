```html
<ui-select :options="options" :model="selected"
           optionKey="key" optionValue="value"
           defaultKey="0" defaultValue="All items"
           @change="balmUI.onChange('selected', $event)"
           @selected="onOptionSelected"></ui-select>
```

```js
export default {
  data() {
    return {
      selected: 0,
      options: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }]
    };
  },
  methods: {
    onOptionSelected(option) {
      console.log(option);
    }
  }
};
```
