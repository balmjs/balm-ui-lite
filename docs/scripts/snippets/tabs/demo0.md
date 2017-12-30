默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-tabs> 属性的默认值
  UiTabs: {
    // some props
  },
  // (可选) 复写全局 <ui-tab-bar> 属性的默认值
  UiTabBar: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiTabsComponents from 'balm-ui-lite/components/tabs';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/tabs.css';

// (可选)
UiTabsComponents.config({
  // 复写全局 <ui-tabs> 属性的默认值
  UiTabs: {
    // some props
  },
  // 复写全局 <ui-tab-bar> 属性的默认值
  UiTabBar: {
    // some props
  }
});

for (let key in UiTabsComponents) {
  let Component = UiTabsComponents[key];
  Vue.component(Component.name, Component);
}
```
