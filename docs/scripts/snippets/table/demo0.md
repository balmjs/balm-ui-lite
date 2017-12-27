默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiTable from 'balm-ui-lite/components/table';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/table.css';
import 'balm-ui-lite/components/button.css'; // 可选
import 'balm-ui-lite/components/checkbox.css'; // 可选

Vue.component(UiTable.name, UiTable);
```
