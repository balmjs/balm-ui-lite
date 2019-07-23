```html
<ui-rangepicker
  :model="date"
  startPlaceholder="Start date"
  endPlaceholder="End date"
  @change="balmUI.onChange('date', $event, doSomething)"
  @error="onError"
></ui-rangepicker>
```

```js
export default {
  data() {
    return {
      date: []
    };
  },
  methods: {
    doSomething() {
      console.log('gg');
    },
    onError(msg) {
      console.log(msg);
    }
  }
};
```
