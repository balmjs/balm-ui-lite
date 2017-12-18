默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiCheckbox from 'balm-ui-lite/components/checkbox';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/checkbox.css';

Vue.component(UiCheckbox.name, UiCheckbox);
```
