默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiDatepicker from 'balm-ui-lite/components/datepicker';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';
import 'balm-ui-lite/components/datepicker.css';
import 'balm-ui-lite/components/icon.css'; // 可选

Vue.component(UiDatepicker.name, UiDatepicker);
```
