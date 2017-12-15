默认使用

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

const rules = {
  required: {
    validate(value) {
      return value.length > 0;
    },
    message: '%s is required'
  }
};

Vue.use(BalmUI.plugins.validator, rules);
```

独立使用

```js
import Vue from 'vue';
import validator from 'balm-ui-lite/plugins/validator';

const rules = {
  required: {
    validate(value) {
      return value.length > 0;
    },
    message: '%s is required'
  }
};

Vue.use(validator, rules);
```

rules是自定义的验证规则集合，每个键值对代表一种规则，包含一个validate方法用于验证数据，一个message用于验证不通过的提示。


validator插件默认包含了一个'required'的规则，你也可以编写自己的'required'规则来覆盖掉默认规则。
