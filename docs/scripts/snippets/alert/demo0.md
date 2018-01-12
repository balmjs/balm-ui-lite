默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $alert 属性的默认值
  $alert: {
    // ...
  }
});
```

独立使用

```js
import Vue from 'vue';
import $alert from 'balm-ui-lite/plugins/alert';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/dialog.css';
import 'balm-ui-lite/components/button.css';

Vue.use($alert, {
  // (可选) 复写全局 $alert 属性的默认值
  // ...
});
```
