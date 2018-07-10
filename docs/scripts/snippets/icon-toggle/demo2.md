```html
<ui-icon-toggle
  value="qr"
  v-model="checked">
  <i class="fa fa-qrcode"></i>
</ui-icon-toggle>

<ui-icon-toggle
  value="tv"
  v-model="checked">
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
