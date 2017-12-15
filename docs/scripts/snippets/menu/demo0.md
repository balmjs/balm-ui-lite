默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import { UiMenu, UiMenuitem } from 'balm-ui-lite/components/menu';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/menu.css';

Vue.component(UiMenu.name, UiMenu);
Vue.component(UiMenuitem.name, UiMenuitem);
```
