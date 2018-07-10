```html
<ui-datepicker
  placeholder="Select Date.."
  toggle
  clear
  :config="config"
  v-model="date">
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
