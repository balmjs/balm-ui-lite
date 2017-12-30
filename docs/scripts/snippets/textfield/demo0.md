默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-textfield> 属性的默认值
  UiTextfield: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiTextfield from 'balm-ui-lite/components/textfield';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';

// (可选) 复写全局 <ui-textfield> 属性的默认值
UiTextfield.config({
  // some props
});

Vue.component(UiTextfield.name, UiTextfield);
```
