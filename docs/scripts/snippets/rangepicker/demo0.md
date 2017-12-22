默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui-lite/components/rangepicker';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';
import 'balm-ui-lite/components/rangepicker.css';

Vue.component(UiRangepicker.name, UiRangepicker);
```
