默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-spinner> 属性的默认值
  UiSpinner: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiSpinner from 'balm-ui-lite/components/spinner';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/spinner.css';

// (可选) 复写全局 <ui-spinner> 属性的默认值
UiSpinner.config({
  // some props
});

Vue.component(UiSpinner.name, UiSpinner);
```
