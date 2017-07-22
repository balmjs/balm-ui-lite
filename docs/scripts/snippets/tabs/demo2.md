```html
<ui-tabs :active="tab">
  <ui-tab-bar effect @change="onChange">
    <ui-tab v-for="(item, index) in ['edit', 'delete']" :key="index">
      <ui-icon>{{ item }}</ui-icon>
    </ui-tab>
  </ui-tab-bar>
  <ui-panel>
    <p>Material icon1</p>
  </ui-panel>
  <ui-panel>
    <p>Material icon2</p>
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
