默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  UiPagination: {
    jumperBefore: '跳转',
    jumperAfter: '页',
    jumperButton: '确定'
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiPagination from 'balm-ui-lite/components/pagination';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/pagination.css';

Vue.component(UiPagination.name, UiPagination);
```
