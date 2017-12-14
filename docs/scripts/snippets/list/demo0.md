默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiListComponents from 'balm-ui-lite/components/list';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/list.css';

for (let key in UiListComponents) {
  let Component = UiListComponents[key];
  Vue.component(Component.name, Component);
}
```
