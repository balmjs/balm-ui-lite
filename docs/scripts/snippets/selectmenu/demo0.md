默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSelectmenu from 'balm-ui-lite/components/selectmenu';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/select.css';

Vue.component(UiSelectmenu.name, UiSelectmenu);
```
