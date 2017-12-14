默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiTabsComponents from 'balm-ui-lite/components/tabs';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/tabs.css';

for (let key in UiTabsComponents) {
  let Component = UiTabsComponents[key];
  Vue.component(Component.name, Component);
}
```
