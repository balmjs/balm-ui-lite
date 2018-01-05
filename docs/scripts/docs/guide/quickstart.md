# BalmUI Lite 快速上手

好的工具能让开发更加简单快捷。

[Balm CLI](https://github.com/balmjs/balm-cli) 是一个命令行界面工具，它可以快速创建基于 [BalmJS](http://balmjs.com/) 的项目脚手架。

## 1. 设置开发环境

在开始工作之前，我们必须设置好开发环境。

如果你的机器上还没有 [Node.js](https://nodejs.org/en/download/) 和 npm，请先安装它们。

> 请先在终端/控制台窗口中运行命令 `node -v` 和 `npm -v`， 来验证一下你正在运行 node 6.x.x 和 npm 3.x.x 以上的版本。 更老的版本可能会出现错误，更新的版本则没问题。

然后全局安装 Balm CLI 。

```sh
npm install -g balm-cli

# 验证
balm -V
```

## 2. 创建新项目

打开终端窗口。

运行下列命令来生成一个新项目以及应用的骨架代码：

```sh
balm init vue my-project
```

## 3. 安装

进入项目并安装依赖：

```sh
cd my-project

yarn
# OR
npm install
```

> 请耐心等待。 安装依赖需要花费一定时间，大多数时候都是在安装那些npm包。如果“网络状况”不佳，请走[淘宝源](https://npm.taobao.org/)

安装 __BalmUI Lite__

```sh
yarn add balm-ui-lite
# OR
npm i --save balm-ui-lite
```

## 4. 配置 Vue 项目

### 4.1 配置样式

编辑样式文件：`my-project/app/styles/global/_vendor.scss`

```css
/* 新增 BalmUI Lite 样式库 */
@import '../../../node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss';
```

> 推荐使用Sass引入 `/path/to/balm-ui-lite.scss` ，可以使用Sass变量快速重写全局或组件的样式

### 4.2 配置脚本

编辑脚本文件：`my-project/app/scripts/main.js`

```js
import Vue from 'vue';
import app from './views/layouts/app';
import BalmUI from 'balm-ui-lite'; // 引用

Vue.config.productionTip = false;
Vue.use(BalmUI); // 安装

new Vue({
  el: '#app',
  components: { app },
  template: '<app/>'
});
```

### 4.3 UI库所需的图片和字体

下载 [BalmUI Lite assets](http://balmjs.com/ui-vue-lite/assets.zip) 并解压，将其中的 _images_ 和 _fonts_ 文件夹复制到项目中（__`/path/to/my-project/app`__）

> 更多使用方式和免下载资源的方法请参照 [进阶用法](http://balmjs.com/ui-vue-lite/#/guide/advanced)

## 5. 开发调试

```sh
npm run dev
```

修改一个组件，编辑Vue文件：`my-project/app/scripts/views/components/hello.vue`

```html
<template>
  <div class="hello">
    ...
    <!-- 添加一个测试按钮 -->
    <ui-button @click="$alert('gg')">点我</ui-button>
  </div>
</template>
```

## 6. 构建和部署

```sh
npm run prod
```

> [BalmJS](http://balmjs.com/) 默认会将项目构建到 `dist` 目录中，你可以根据具体业务需求修改构建和部署的配置（`my-project/config/balmrc.js`）。
