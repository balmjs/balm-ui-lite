默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import { UiBadge, UiBadgeLink } from 'balm-ui-lite/components/badge';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/badge.css';

Vue.component(UiBadge.name, UiBadge);
Vue.component(UiBadgeLink.name, UiBadgeLink);
```
