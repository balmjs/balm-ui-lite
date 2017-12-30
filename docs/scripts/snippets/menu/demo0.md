默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-menu> 属性的默认值
  UiMenu: {
    // some props
  },
  // (可选) 复写全局 <ui-menuitem> 属性的默认值
  UiMenuitem: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiMenuComponents from 'balm-ui-lite/components/menu';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/menu.css';

// (可选)
UiMenuComponents.config({
  // 复写全局 <ui-menu> 属性的默认值
  UiMenu: {
    // some props
  },
  // 复写全局 <ui-menuitem> 属性的默认值
  UiMenuitem: {
    // some props
  }
});

for (let key in UiMenuComponents) {
  let Component = UiMenuComponents[key];
  Vue.component(Component.name, Component);
}
```
