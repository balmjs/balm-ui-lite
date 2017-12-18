默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiRadio from 'balm-ui-lite/components/radio';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/radio.css';

Vue.component(UiRadio.name, UiRadio);
```
