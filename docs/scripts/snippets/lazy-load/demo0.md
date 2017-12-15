默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.directive('lazy-load', BalmUI.directives.lazyLoad);
```

独立使用

```js
import Vue from 'vue';
import lazyLoad from 'balm-ui-lite/directives/lazy-load';

Vue.directive('lazy-load', lazyLoad);
```
