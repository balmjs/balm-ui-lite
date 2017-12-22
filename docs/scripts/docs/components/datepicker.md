#### 使用注意点

> Datepicker 使用了第三方插件 - [flatpickr](https://chmln.github.io/flatpickr/)，使用时需要额外加载flatpickr的样式

__flatpickr样式配置方案 I（推荐）__

在 [BalmJS](http://balmjs.com/) 工作流环境中可直接在HTML文件中调用第三方插件样式或脚本进行开发，且打包时会合成自定义的第三方包，无需额外配置，所以推荐使用。

```html
<head>
  ...
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
  <!-- build:css css/plugins.css -->
  <link rel="stylesheet" href="/node_modules/flatpickr/dist/flatpickr.min.css">
  <!-- endbuild -->
  ...
</head>
```

> 例子中 `css/plugins.css` 就是打包时的目标目录和文件

__flatpickr样式配置方案 II__

通常 [Balm CLI](https://github.com/balmjs/balm-cli) 生成的脚手架项目中有一个 `config/balmrc.js`，修改即可。（非BalmJS环境请自行修改 `webpack` 配置，效果一样）


```js
// balmrc.js

module.exports = {
  ...
  scripts: {
    ...
    alias: {
      flatpickrCss: 'flatpickr/dist/flatpickr.min.css',
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js'
    }
  },
  ...
};
```

```js
// entry.js

import Vue from 'vue';
import BalmUI from 'balm-ui-lite';
import 'flatpickrCss';

Vue.use(BalmUI);
```

> __BalmJS__ 思想是 __CSS__ 和 __JS__ 分离管理，以达到__“所有的样式和脚本全部模块化”__，而不是简简单单的从脚本中萃取一个 All in one 的 CSS，所以推荐使用 __方案 I__
