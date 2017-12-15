默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSpinner from 'balm-ui-lite/components/spinner';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/spinner.css';

Vue.component(UiSpinner.name, UiSpinner);
```
