```html
<ui-icon-toggle
  icon="format_bold"
  value="b"
  :model="picked"
  @change="balmUI.onChange('picked', $event)">
</ui-icon-toggle>

<ui-icon-toggle
  icon="format_italic"
  value="i"
  :model="picked"
  @change="balmUI.onChange('picked', $event)">
</ui-icon-toggle>

<span>Picked: {{ picked }}</span>
```

```js
export default {
  data() {
    return {
      picked: []
    };
  }
};
```
