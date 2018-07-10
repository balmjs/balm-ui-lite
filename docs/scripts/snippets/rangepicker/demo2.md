```html
<ui-rangepicker
  v-model="date"
  :options="options"
  startPlaceholder="Start date"
  endPlaceholder="End date"></ui-rangepicker>
```

```js
export default {
  data() {
    return {
      date2: [TODAY, TODAY],
      options: [
        {
          key: 0,
          value: 'Today'
        },
        {
          key: 6,
          value: '7 Days'
        },
        {
          key: 29,
          value: '30 Days'
        }
      ]
    };
  }
};
```
