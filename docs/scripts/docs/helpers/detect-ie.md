## 检测IE版本

### 概述

这是一个检测IE版本的方法。

### 引入

默认使用
```js
import {helpers} from 'balm-ui-lite';

helpers.detectIE();
```

独立引入
```js
import detectIE from 'balm-ui-lite/helpers/detect-ie';

detectIE();
```

##### 如果是现代浏览器，则返回false；如果是IE浏览器，则返回版本号。
