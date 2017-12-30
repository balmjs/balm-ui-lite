默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-chip> 属性的默认值
  UiChip: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiChipComponents from 'balm-ui-lite/components/chip';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/chip.css';

// (可选)
UiBadgeComponents.config({
  // 复写全局 <ui-chip> 属性的默认值
  UiChip: {
    // some props
  }
});

for (let key in UiChipComponents) {
  let Component = UiChipComponents[key];
  Vue.component(Component.name, Component);
}
```
