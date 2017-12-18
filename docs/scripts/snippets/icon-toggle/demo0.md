默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiIconToggle from 'balm-ui-lite/components/icon-toggle';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/icon.css';
import 'balm-ui-lite/components/icon-toggle.css';

Vue.component(UiIconToggle.name, UiIconToggle);
```
