```html
<ui-datepicker
  placeholder="Select Date.."
  toggle
  clear
  :config="config"
  :model="date"
  @change="balmUI.onChange('date', $event)">
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        defaultDate: 'today'
      }
    };
  }
};
```
