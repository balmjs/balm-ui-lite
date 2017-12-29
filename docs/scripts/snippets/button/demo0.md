默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI, {
  UiButton: {
    raised: true
  }
});
```

独立使用

```js
import Vue from 'vue';
import UiButton from 'balm-ui-lite/components/button';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';

UiButton.config({
  raised: true
});

Vue.component(UiButton.name, UiButton);
```
