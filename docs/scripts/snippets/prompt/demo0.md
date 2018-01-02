默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 $prompt 属性的默认值
  $prompt: {
    // ...
  }
});
```

独立使用

```js
import Vue from 'vue';
import $prompt from 'balm-ui-lite/plugins/prompt';

Vue.use($prompt, {
  // (可选) 复写全局 $prompt 属性的默认值
  // ...
});
```
