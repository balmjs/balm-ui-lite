默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-datepicker> 属性的默认值
  UiDatepicker: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiDatepicker from 'balm-ui-lite/components/datepicker';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';
import 'balm-ui-lite/components/datepicker.css';
import 'balm-ui-lite/components/icon.css'; // 可选
import 'flatpickr/dist/flatpickr.min.css';

// (可选) 复写全局 <ui-datepicker> 属性的默认值
UiDatepicker.config({
  // some props
});

Vue.component(UiDatepicker.name, UiDatepicker);
```
