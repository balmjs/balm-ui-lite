默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiFileupload from 'balm-ui-lite/components/fileupload';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/fileupload.css';

Vue.component(UiFileupload.name, UiFileupload);
```
