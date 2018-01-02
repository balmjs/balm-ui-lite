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

Vue.use(BalmUI, {
  // (可选) 复写全局 $validate 验证规则的默认值
  $validator: rules
});
```

独立使用

```js
import Vue from 'vue';
import $validator from 'balm-ui-lite/plugins/validator';

const rules = {
  required: {
    validate(value) {
      return value.length > 0;
    },
    message: '%s is required'
  }
};

Vue.use($validator, rules);
```

- `rules` 是自定义的验证规则集合，每个键值对代表一种规则
    - 包含一个 `validate(value: any)` 方法用于验证数据
    - 包含一个 `message` 用于验证不通过的提示。
- __Validator__ 插件默认包含了一个'required'的规则，你也可以编写自己的'required'规则来覆盖掉默认规则。
