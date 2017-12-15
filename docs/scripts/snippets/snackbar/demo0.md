默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSnackbar from 'balm-ui-lite/components/snackbar';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/snackbar.css';

Vue.component(UiSnackbar.name, UiSnackbar);
```
