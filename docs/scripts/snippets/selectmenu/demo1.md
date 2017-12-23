```html
<ui-selectmenu :options="options" :model="formData.selected"
  optionKey="key" optionValue="value"
  @change="balmUI.onChange('formData.selected', $event)"
  @selected="balmUI.onChange('currentOption', $event)"></ui-selectmenu>
```

```js
export default {
  data() {
    return {
      options: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }],
      selected: 1,
      currentOption: {}
    };
  }
};
```
