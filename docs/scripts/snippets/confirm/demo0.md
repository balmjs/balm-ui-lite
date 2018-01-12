默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $confirm 属性的默认值
  $confirm: {
    // ...
  }
});
```

独立使用

```js
import Vue from 'vue';
import $confirm from 'balm-ui-lite/plugins/confirm';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/dialog.css';
import 'balm-ui-lite/components/button.css';

Vue.use($confirm, {
  // (可选) 复写全局 $confirm 属性的默认值
  // ...
});
```
