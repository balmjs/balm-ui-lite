```html
<ui-tabs :active="tab">
  <ui-tab-bar @change="balmUI.onChange('tab', $event)">
    <ui-tab v-for="(item, index) in ['Tab1', 'Tab2', 'Tab3']" :key="index">
      {{ item }}
    </ui-tab>
  </ui-tab-bar>
  <ui-panel>
    <p>Panel 1</p>
  </ui-panel>
  <ui-panel>
    <p>Panel 2</p>
  </ui-panel>
  <ui-panel>
    <p>Panel 3</p>
  </ui-panel>
</ui-tabs>
```

```js
export default {
  data() {
    return {
      tab: 0
    };
  }
};
```
