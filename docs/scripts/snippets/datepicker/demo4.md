```html
<ui-datepicker
  placeholder="Select Multi Date.."
  :config="config"
  :model="date"
  @change="balmUI.onChange('date', $event)" ></ui-datepicker>
```

```js
export default {
  data() {
    return {
      date: ['2017-11-05', '2017-11-15', '2017-11-25'],
      config: {
        mode: 'multiple'
      }
    };
  }
};
```
