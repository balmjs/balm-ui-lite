## 变量类型检测

#### 概述
这里有一些其他的我们觉得常用的辅助方法。

#### 引入

默认使用
```js
import {helpers} from 'balm-ui-lite';

const a = [1];
const b = [1];

helpers.jsonEqual(a, b); // true;
```

独立引入
```js
import {jsonEqual} from 'balm-ui-lite/helpers/utils';

const a = [1];
const b = [1];

helpers.jsonEqual(a, b); // true;
```

如果你把helpers封装成插件，则可以在Vue实例下直接使用this.$helpers.xxx了。

#### 方法

目前包含下面这两种方法：

```js
import {helpers} from 'balm-ui-lite';

// 比较两个对象或者两个数组的值是否完全相等
helpers.jsonEqual

/** 根据变量类型做出一些特定的检测，具体为：
*** String: 空字符串或者字符串'0'时，返回true;
*** Number: 0或者NaN时，返回true;
*** Array: length为0时，返回true;
*** Object: 键值个数为0时，返回true;
*** Boolean: 直接返回 !变量;
*** null && undefined: 直接返回true;
**/
helpers.isEmpty
```
