```html
<ui-icon-toggle
  value="qr"
  :model="checked"
  @change="balmUI.onChange('checked', $event)">
  <i class="fa fa-qrcode"></i>
</ui-icon-toggle>

<ui-icon-toggle
  value="tv"
  :model="checked"
  @change="balmUI.onChange('checked', $event)">
  <i class="fa fa-tv"></i>
</ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      checked: []
    };
  }
};
```
