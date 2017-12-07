```html
<ui-datepicker :config="config"
  :model="date"
  placeholder="Select Date Range.."
  @change="balmUI.onChange('date', $event)"></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'range'
      }
    };
  }
};
```
