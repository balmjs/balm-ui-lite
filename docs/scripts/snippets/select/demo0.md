默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSelect from 'balm-ui-lite/components/select';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/select.css';

Vue.component(UiSelect.name, UiSelect);
```
