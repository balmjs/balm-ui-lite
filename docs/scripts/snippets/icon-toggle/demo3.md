```html
<ui-icon-toggle value="qr" :model="icons" @change="onIconsChange">
  <i class="fa fa-qrcode"></i>
</ui-icon-toggle>
<ui-icon-toggle value="tv" :model="icons" @change="onIconsChange">
  <i class="fa fa-tv"></i>
</ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      icons: []
    };
  },
  methods: {
    onChange(val) {
      this.icons = val;
    }
  }
};
```
