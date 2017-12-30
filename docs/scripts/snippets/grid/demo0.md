默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-grid> 属性的默认值
  UiGrid: {
    // some props
  },
  // (可选) 复写全局 <ui-cell> 属性的默认值
  UiCell: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiGridComponents from 'balm-ui-lite/components/grid';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/grid.css';

// (可选)
UiGridComponents.config({
  // 复写全局 <ui-grid> 属性的默认值
  UiGrid: {
    // some props
  },
  // 复写全局 <ui-cell> 属性的默认值
  UiCell: {
    // some props
  }
});

for (let key in UiGridComponents) {
  let Component = UiGridComponents[key];
  Vue.component(Component.name, Component);
}
```
