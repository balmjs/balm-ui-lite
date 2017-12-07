```html
<!-- Simple header with fixed tabs. -->
<ui-layout fixedHeader fixedTabs :active="tab">
  <ui-layout-header>
    <ui-layout-header-row>
      <ui-layout-title>Title</ui-layout-title>
    </ui-layout-header-row>
    <!-- Tabs -->
    <ui-layout-tab-bar @change="balmUI.onChange('tab', $event)">
      <ui-layout-tab v-for="(item, index) in menu" :key="index">
        {{ item }}
      </ui-layout-tab>
    </ui-layout-tab-bar>
  </ui-layout-header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
  </div>
  <ui-layout-content>
    <ui-layout-tab-panel id="scroll-tab-1">
      <div class="page-content">Content 1</div>
    </ui-layout-tab-panel>
    <ui-layout-tab-panel id="scroll-tab-2">
      <div class="page-content">Content 2</div>
    </ui-layout-tab-panel>
    <ui-layout-tab-panel id="scroll-tab-3">
      <div class="page-content">Content 3</div>
    </ui-layout-tab-panel>
  </ui-layout-content>
</ui-layout>
```

```js
export default {
  data() {
    return {
      menu: ['Tab1', 'Tab2', 'Tab3'],
      tab: 0
    };
  }
};
```
