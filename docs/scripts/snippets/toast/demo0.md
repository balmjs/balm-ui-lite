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

Vue.use($toast, {
  // (可选) 复写全局 $toast 属性的默认值
  // ...
});
```
