默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiChipComponents from 'balm-ui-lite/components/chip';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/chip.css';

for (let key in UiChipComponents) {
  let Component = UiChipComponents[key];
  Vue.component(Component.name, Component);
}
```
