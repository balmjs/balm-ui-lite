默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiTooltip from 'balm-ui-lite/components/tooltip';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/tooltip.css';

Vue.component(UiTooltip.name, UiTooltip);
```
