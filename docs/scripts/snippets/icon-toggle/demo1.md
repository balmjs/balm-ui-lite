```html
<ui-icon-toggle
  icon="format_bold"
  value="b"
  :model="checked1"
  @change="balmUI.onChange('checked1', $event)">
</ui-icon-toggle>

<ui-icon-toggle
  icon="format_italic"
  value="i"
  :model="checked2"
  @change="balmUI.onChange('checked2', $event)">
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
