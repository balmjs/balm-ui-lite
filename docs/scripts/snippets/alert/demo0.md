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

Vue.use($alert, {
  // (可选) 复写全局 $alert 属性的默认值
  // ...
});
```
