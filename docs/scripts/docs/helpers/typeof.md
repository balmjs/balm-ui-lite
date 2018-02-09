## 变量类型检测

#### 引入

默认使用

```js
import { helpers } from 'balm-ui-lite';

const hello = 'Hello BalmUI';
const arr = [];
const n = '1';

helpers.getType(hello); // 'string'
helpers.isArray(arr); // true
helpers.isNumber(n); // false
```

独立引入

```js
import { getType, isArray, isNumber } from 'balm-ui-lite/helpers/is';

const hello = 'Hello BalmUI';
const arr = [];
const n = '1';

getType(hello); // 'string'
isArray(arr); // true
isNumber(n); // false
```

如果你不想每次在不同的脚本里使用这些辅助方法都引入一遍，你可以把这些方法包装成 Vue 插件，很简单：

```js
import Vue from 'Vue';

import { helpers } from 'balm-ui-lite';

Vue.prototype.$helpers = helpers;

// or

import is from 'balm-ui-lite/helpers/is';

Vue.prototype.$is = is;
```

接下来，你就可以在 Vue 实例下直接使用 this.$helpers.xxx 或者 this.$is.xxx 了。

#### 方法

变量类型检测方法包含下面这几种：

```js
import { helpers } from 'balm-ui-lite';

helpers.getType; // 输出变量的数据类型
helpers.isArray; // 检测变量是否为数组
helpers.isBoolean; // 检测变量是否为布尔值
helpers.isFunction; // 检测变量是否为一个方法
helpers.isNull; // 检测变量是否为Null
helpers.isNumber; // 检测变量是否为数字
helpers.isObject; // 检测变量是否为对象
helpers.isString; // 检测变量是否为字符串
helpers.isSymbol; // 检测变量是否为symbol
helpers.isUndefined; // 检测变量是否为undefined
```
