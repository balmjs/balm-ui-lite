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

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/dialog.css';
import 'balm-ui-lite/components/button.css';

Vue.use($prompt, {
  // (可选) 复写全局 $prompt 属性的默认值
  // ...
});
```
