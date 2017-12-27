默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiFile from 'balm-ui-lite/components/file';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';
import 'balm-ui-lite/components/icon.css';

Vue.component(UiFile.name, UiFile);
```
