```html
<ui-rangepicker
  :model="date"
  :options="options"
  startPlaceholder="Start date"
  endPlaceholder="End date"
  @change="balmUI.onChange('date', $event)"></ui-rangepicker>
```

```js
export default {
  data() {
    return {
      date2: [TODAY, TODAY],
      options: [{
        key: 0,
        value: 'Today'
      }, {
        key: 6,
        value: '7 Days'
      }, {
        key: 29,
        value: '30 Days'
      }]
    };
  }
};
```
