```html
<ui-datepicker :config="config"
  :model="date"
  placeholder="Select Multi Date.."
  @change="balmUI.onChange('date', $event)"></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: '',
      config: {
        mode: 'multiple'
      }
    };
  }
};
```
