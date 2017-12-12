默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI.plugins.event, options); // options为可选参数，默认值：{ namspace: 'balmUI' }
```

独立使用

```js
import Vue from 'vue';
import event from 'balm-ui-lite/plugins/event';

Vue.use(event, options); 
```
