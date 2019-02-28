```html
<ui-checkbox v-model="checked1">
  Checkbox ({{ checked1 }})
</ui-checkbox>

<ui-checkbox v-model="checked2">
  Checkbox ({{ checked2 }})
</ui-checkbox>
```

```js
export default {
  data() {
    return {
      checked1: true,
      checked2: false
    };
  }
};
```
