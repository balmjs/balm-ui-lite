默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-card> 属性的默认值
  UiCard: {
    // some props
  },
  // (可选) 复写全局 <ui-card-head> 属性的默认值
  UiCardHead: {
    // some props
  },
  // (可选) 复写全局 <ui-card-actions> 属性的默认值
  UiCardActions: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiCardComponents from 'balm-ui-lite/components/card';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/card.css';

// (可选)
UiCardComponents.config({
  // 复写全局 <ui-card> 属性的默认值
  UiCard: {
    // some props
  },
  // 复写全局 <ui-card-head> 属性的默认值
  UiCardHead: {
    // some props
  },
  // 复写全局 <ui-card-actions> 属性的默认值
  UiCardActions: {
    // some props
  }
});

for (let key in UiCardComponents) {
  let Component = UiCardComponents[key];
  Vue.component(Component.name, Component);
}
```
