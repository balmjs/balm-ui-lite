# BalmUI Lite 进阶用法

1. 样式模块化方案
2. 脚本模块化方案
3. 自动获取UI所需的图片和字体资源

> ⚠️ 以下配置依旧基于 [Balm CLI](https://github.com/balmjs/balm-cli) 搭建的 Vue脚手架

## 1. 样式模块化

### 1.1 Sass 方案（推荐）

编辑 `/path/to/my-project/app/styles/global/_vendor.scss`（第三方 Sass 入口文件管理）

```css
@import '../../../node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss';
```

> 然后可以通过编辑 `/path/to/my-project/app/styles/global/_var.scss` 设定指定的样式变量来快速复写UI样式

__模板统一格式__

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
  <!-- build:css css/plugins.css -->
  <link rel="stylesheet" href="/node_modules/path/to/some-plugin.css">
  ...
  <!-- endbuild -->
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/lte10.css">
  <!--[if IE 9]>
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/ie9.css">
  <![endif]-->
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  ...
</body>

</html>
```

- `main.css` 项目样式入口文件
- `css/plugins.css` 所有第三方样式文件打包后的文件路径（如果第三方提供 Sass，也可直接在 `/path/to/my-project/app/styles/global/_vendor.scss` 中进行管理）
- `lte10.css` 为兼容 _IE10-_ 而生
- `ie9.css` 为强行兼容 _IE_ 而生

> 没有 IE8-，因为 [Vue.js](https://vuejs.org/v2/guide/installation.html) 不支持 IE8 及其以下版本

### 1.2 直接 CSS 方案

```html
<head>
  ...
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/dist/balm-ui-lite.css">
  <link rel="stylesheet" href="/node_modules/path/to/some-plugin.css">
  ...
  <!-- endbuild -->
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/main.css">
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/lte10.css">
  <!--[if IE 9]>
  <link rel="stylesheet" href="%PUBLIC_URL%/styles/ie9.css">
  <![endif]-->
</head>
```

> 注意 `main.css` 的位置顺序

## 2. 脚本模块化

### 2.1 完整引用

#### 2.1.1 模块引入（推荐）

编辑 `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

#### 2.1.2 浏览器引入

编辑 `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/dist/balm-ui-lite.css">
  <!-- endbuild -->
  ...
</head>

<body>
  <div id="app">
    <ui-button @click="$alert(message)">SayHi</ui-button>
  </div>

  <script src="https://unpkg.com/vue"></script>
  <!-- build:js js/vendors.js -->
  <script src="/node_modules/balm-ui-lite/dist/balm-ui-lite.js"></script>
  <!-- endbuild -->
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello BalmUI'
    }
  });
  </script>
</body>

</html>
```

### 2.2 独立引用

> 推荐移动端 H5 开发时使用此方案，因为打包体积相对更小

#### 2.2.1 模块引入

编辑 `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
// 引用UI部分脚本
import UiButton from 'balm-ui-lite/components/button';
import $alert from 'balm-ui-lite/plugins/alert';

// 引用UI部分样式
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';
import 'balm-ui-lite/components/dialog.css';

// 安装Button组件
Vue.component(UiButton.name, UiButton);
// 安装Alert插件
Vue.use($alert);
```

> 关于 _CSSinJS_，可通过 BalmJS 配置提取样式，但 BalmJS的思想 更推荐将样式和脚本分离管理，以达成更加灵活的模块配置和管理

#### 2.2.2 浏览器引入

编辑 `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/core.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/button.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/dialog.css">
  <!-- endbuild -->
  ...
</head>

<body>
  <div id="app">
    <ui-button @click="$alert(message)">SayHi</ui-button>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <!-- build:js js/vendors.js -->
  <script src="/node_modules/balm-ui-lite/components/button.js"></script>
  <script src="/node_modules/balm-ui-lite/plugins/alert.js"></script>
  <!-- endbuild -->
  <script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello BalmUI'
    }
  });
  </script>
</body>

</html>
```

### 2.3 源码引用

> 打包效果同 __完整引用__ 方案

编辑 `/path/to/my-project/app/config/balmrc.js`

```js
var path = require('path');

module.exports = {
  ...
  scripts: {
    ...
    alias: {
      ...
      'balm-ui-lite': 'balm-ui-lite/src/scripts/index.js'
    },
    include: [path.resolve('./node_modules/balm-ui-lite/src/scripts')]
  },
  ...
};
```

> 然后代码中引用的 `balm-ui-lite` 就直接指向源代码了，可用于调试 BalmUI Lite 的源代码

## 3. 自动获取UI所需的图片和字体资源

编辑 `/path/to/my-project/gulpfile.js`

```js
...

balm.go(function(mix) {
  if (balm.config.production) {
    ...
  } else {
    mix.copy('./node_modules/balm-ui-lite/img/*', './app/images');
    mix.copy('./node_modules/balm-ui-lite/font/*', './app/fonts');
  }
});
```
