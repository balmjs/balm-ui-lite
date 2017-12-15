默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiProgress from 'balm-ui-lite/components/progress';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/progress.css';

Vue.component(UiProgress.name, UiProgress);
```
