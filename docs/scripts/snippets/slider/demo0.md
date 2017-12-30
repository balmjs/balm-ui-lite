默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-slider> 属性的默认值
  UiSlider: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiSlider from 'balm-ui-lite/components/slider';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/slider.css';

// (可选) 复写全局 <ui-slider> 属性的默认值
UiSlider.config({
  // some props
});

Vue.component(UiSlider.name, UiSlider);
```
