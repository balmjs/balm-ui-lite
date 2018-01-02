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

Vue.use($confirm, {
  // (可选) 复写全局 $confirm 属性的默认值
  // ...
});
```
