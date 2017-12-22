```html
<ui-rangepicker
  :model="date"
  startPlaceholder="Start date"
  endPlaceholder="End date"
  @change="balmUI.onChange('date', $event)"></ui-rangepicker>
```

```js
export default {
  data() {
    return {
      date: []
    };
  }
};
```
