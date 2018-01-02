默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $notify 属性的默认值
  $notify: {
    // ...
  }
});
```

独立使用

```js
import Vue from 'vue';
import $notify from 'balm-ui-lite/plugins/notify';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/plugins/notify.css';

Vue.use($notify, {
  // (可选) 复写全局 $notify 属性的默认值
  // ...
});
```
