默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI.plugins.notify, options);
```

独立使用

```js
import Vue from 'vue';
import $notify from 'balm-ui-lite/plugins/notify';

import 'balm-ui-lite/plugins/notify.css';

Vue.use($notify, options);
```
