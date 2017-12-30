默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-layout> 属性的默认值
  UiLayout: {
    // some props
  },
  // (可选) 复写全局 <ui-layout-header> 属性的默认值
  UiLayoutHeader: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiLayoutComponents from 'balm-ui-lite/components/layout';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/layout.css';

// (可选)
UiLayoutComponents.config({
  // 复写全局 <ui-layout> 属性的默认值
  UiLayout: {
    // some props
  },
  // 复写全局 <ui-layout-header> 属性的默认值
  UiLayoutHeader: {
    // some props
  }
});

for (let key in UiLayoutComponents) {
  let Component = UiLayoutComponents[key];
  Vue.component(Component.name, Component);
}
```
