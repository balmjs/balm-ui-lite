默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiCardComponents from 'balm-ui-lite/components/card';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/card.css';

for (let key in UiCardComponents) {
  let Component = UiCardComponents[key];
  Vue.component(Component.name, Component);
}
```
