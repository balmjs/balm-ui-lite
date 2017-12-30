默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  // (可选) 复写全局 <ui-table> 属性的默认值
  UiTable: {
    // some props
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiTable from 'balm-ui-lite/components/table';

// (建议) 将样式从脚本中分离管理，详见 BalmUI Lite 进阶用法
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/table.css';
import 'balm-ui-lite/components/button.css'; // 可选
import 'balm-ui-lite/components/checkbox.css'; // 可选

// (可选) 复写全局 <ui-table> 属性的默认值
UiTable.config({
  // some props
});

Vue.component(UiTable.name, UiTable);
```
