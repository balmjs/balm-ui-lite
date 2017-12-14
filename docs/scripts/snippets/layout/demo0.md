默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiLayoutComponents from 'balm-ui-lite/components/layout';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/layout.css';

for (let key in UiLayoutComponents) {
  let Component = UiLayoutComponents[key];
  Vue.component(Component.name, Component);
}
```
