默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiDivider from 'balm-ui-lite/components/divider';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/divider.css';

Vue.component(UiDivider.name, UiDivider);
```
