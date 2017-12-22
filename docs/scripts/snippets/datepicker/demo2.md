```html
<ui-datepicker
  placeholder="Select Datetime.."
  toggle
  clear
  :config="config"
  :model="date"
  @change="balmUI.onChange('date', $event)">
  <template slot="toggle">
    <i class="fa fa-calendar"></i>
  </template>
  <template slot="clear">
    <i class="fa fa-close"></i>
  </template>
</ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        enableTime: true
      }
    };
  }
};
```
