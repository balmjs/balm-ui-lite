默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-list> 属性的默认值
  UiList: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiListComponents from 'balm-ui-lite/components/list';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/list.css';

// (可选)
UiListComponents.config({
  // 复写全局 <ui-list> 属性的默认值
  UiList: {
    // some props
  }
});

for (let key in UiListComponents) {
  let Component = UiListComponents[key];
  Vue.component(Component.name, Component);
}
```
