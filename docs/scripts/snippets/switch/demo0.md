默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSwitch from 'balm-ui-lite/components/switch';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/switch.css';

Vue.component(UiSwitch.name, UiSwitch);
```
