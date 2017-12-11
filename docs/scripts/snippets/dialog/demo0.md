默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiDialogComponents from 'balm-ui-lite/components/dialog';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/dialog.css';
import 'balm-ui-lite/components/button.css';

for (let key in UiDialogComponents) {
  let Component = UiDialogComponents[key];
  Vue.component(Component.name, Component);
}
```
