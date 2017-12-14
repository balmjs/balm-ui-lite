默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import { UiGrid, UiCell } from 'balm-ui-lite/components/grid';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/grid.css';

Vue.component(UiGrid.name, UiGrid);
Vue.component(UiCell.name, UiCell);
```
