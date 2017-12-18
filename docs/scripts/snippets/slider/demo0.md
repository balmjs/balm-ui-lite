默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

独立使用

```js
import Vue from 'vue';
import UiSlider from 'balm-ui-lite/components/slider';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/slider.css';

Vue.component(UiSlider.name, UiSlider);
```
