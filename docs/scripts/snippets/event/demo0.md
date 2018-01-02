默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $event 属性的默认值
  $event: {
    namespace: 'balmUI'
  }
});
```

独立使用

```js
import Vue from 'vue';
import $event from 'balm-ui-lite/plugins/event';

Vue.use($event, {
  // (可选) 复写全局 $event 属性的默认值
  namespace: 'balmUI'
});
```
