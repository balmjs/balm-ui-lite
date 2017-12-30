默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-rangepicker> 属性的默认值
  UiRangepicker: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui-lite/components/rangepicker';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';
import 'balm-ui-lite/components/rangepicker.css';
import 'flatpickr/dist/flatpickr.min.css';

// (可选) 复写全局 <ui-rangepicker> 属性的默认值
UiRangepicker.config({
  // some props
});

Vue.component(UiRangepicker.name, UiRangepicker);
```
