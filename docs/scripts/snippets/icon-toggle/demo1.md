```html
<ui-icon-toggle
  icon="format_bold"
  value="b"
  v-model="checked1">
</ui-icon-toggle>

<ui-icon-toggle
  icon="format_italic"
  value="i"
  v-model="checked2">
</ui-icon-toggle>
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
