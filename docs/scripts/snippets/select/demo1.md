```html
<ui-select :options="options" v-model="selected"
  optionKey="key" optionValue="value"
  @selected="balmUI.onChange('currentOption', $event)"></ui-select>
```

```js
export default {
  data() {
    return {
      options: [
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
      ],
      selected: 1,
      currentOption: {}
    };
  }
};
```
