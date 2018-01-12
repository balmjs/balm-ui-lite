默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $toast 属性的默认值
  $toast: {
    // ...
  }
});
```

独立使用

```js
import Vue from 'vue';
import $toast from 'balm-ui-lite/plugins/toast';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/snackbar.css';

Vue.use($toast, {
  // (可选) 复写全局 $toast 属性的默认值
  // ...
});
```
