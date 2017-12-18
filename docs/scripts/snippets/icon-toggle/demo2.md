```html
<ui-icon-toggle
  value="qr"
  :model="picked"
  @change="balmUI.onChange('picked', $event)">
  <i class="fa fa-qrcode"></i>
</ui-icon-toggle>

<ui-icon-toggle
  value="tv"
  :model="picked"
  @change="balmUI.onChange('picked', $event)">
  <i class="fa fa-tv"></i>
</ui-icon-toggle>
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
