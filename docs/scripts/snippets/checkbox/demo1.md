```html
<ui-checkbox
  :model="checked1"
  @change="balmUI.onChange('checked1', $event)">
  Checkbox ({{ checked1 }})
</ui-checkbox>

<ui-checkbox
  :model="checked2"
  @change="balmUI.onChange('checked2', $event)">
  Checkbox ({{ checked2 }})
</ui-checkbox>
```

```js
export default {
  data() {
    return {
      checked1: false,
      checked2: false
    };
  }
};
```
