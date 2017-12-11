## 进阶用法

> 以下配置依旧基于 [Balm CLI](https://github.com/balmjs/balm-cli) 搭建的脚手架

### 1. 完整引用 BalmUI Lite

#### 1.1 浏览器引入

编辑 `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- build:css css/vendor.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/dist/balm-ui-lite.css">
  <!-- endbuild -->
</head>

<body>
  <div id="app">
    <ui-button @click="$alert(message)">测试按钮</ui-button>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <!-- build:js js/vendor.js -->
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

#### 1.2 模块引入

编辑 `/path/to/my-project/app/styles/global/_vendor.scss`

```css
@import '../../../node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss';
```

编辑 `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

// 安装全部组件
Vue.use(BalmUI);
// 安装通用插件
Vue.use(BalmUI.plugins.event);
Vue.use(BalmUI.plugins.alert);
Vue.use(BalmUI.plugins.confirm);
Vue.use(BalmUI.plugins.toast);
Vue.use(BalmUI.plugins.notify);
```

### 2. 独立引用 BalmUI Lite（推荐移动端H5开发使用此方案）

#### 2.1 浏览器引入

编辑 `/path/to/my-project/app/index.html`

```html
<!DOCTYPE html>
<html>

<head>
  ...
  <!-- build:css css/vendor.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/core.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/button.css">
  <link rel="stylesheet" href="/node_modules/balm-ui-lite/components/dialog.css">
  <!-- endbuild -->
</head>

<body>
  <div id="app">
    <ui-button @click="$alert(message)">测试按钮</ui-button>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <!-- build:js js/vendor.js -->
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

#### 2.2 模块引入

编辑 `/path/to/my-project/app/scripts/main.js`

```js
import Vue from 'vue';
// 引用UI部分样式（通过 BalmJS 配置可提取样式）
import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';
import 'balm-ui-lite/components/dialog.css';
// 引用UI部分脚本
import UiButton from 'balm-ui-lite/components/button';
import UiAlertPlugin from 'balm-ui-lite/plugins/alert';

// 安装Button组件
Vue.component(UiButton.name, UiButton);
// 安装Alert插件
Vue.use(UiAlertPlugin);
```

### 3. 源码引用 BalmUI Lite（打包效果同完整引用方案）

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

> 然后代码中引用的 `balm-ui-lite` 就直接指向源代码了，可用于调试BalmUI Lite的源代码

### 4. 自动复制UI所需的图片和字体资源

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
