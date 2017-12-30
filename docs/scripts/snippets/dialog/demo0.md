默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-dialog> 属性的默认值
  UiDialog: {
    // some props
  },
  // (可选) 复写全局 <ui-dialog-actions> 属性的默认值
  UiDialogActions: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiDialogComponents from 'balm-ui-lite/components/dialog';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/dialog.css';
import 'balm-ui-lite/components/button.css'; // 可选

// (可选)
UiDialogComponents.config({
  // (可选) 复写全局 <ui-dialog> 属性的默认值
  UiDialog: {
    // some props
  },
  // (可选) 复写全局 <ui-dialog-actions> 属性的默认值
  UiDialogActions: {
    // some props
  }
});

for (let key in UiDialogComponents) {
  let Component = UiDialogComponents[key];
  Vue.component(Component.name, Component);
}
```
