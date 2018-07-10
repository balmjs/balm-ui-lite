```html
<ui-datepicker
  placeholder="Select Date Range.."
  :config="config"
  v-model="date"></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: ['2017-11-10', '2017-11-20'],
      config: {
        mode: 'range'
      }
    };
  }
};
```
