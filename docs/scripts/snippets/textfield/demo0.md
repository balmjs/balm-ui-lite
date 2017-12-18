默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiTextfield from 'balm-ui-lite/components/textfield';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/textfield.css';

Vue.component(UiTextfield.name, UiTextfield);
```
