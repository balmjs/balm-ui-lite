```html
<ui-tabs :active="tab">
  <ui-tab-bar effect @change="onChange">
    <ui-tab v-for="(item, index) in ['qrcode', 'tv']" :key="index">
      <i :class="['fa', `fa-${item}`]"></i>
    </ui-tab>
  </ui-tab-bar>
  <ui-panel>
    <p>QR code</p>
  </ui-panel>
  <ui-panel>
    <p>PC</p>
  </ui-panel>
</ui-tabs>
```

```js
export default {
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  }
};
```
