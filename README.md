# [BalmUI Lite](http://balmjs.com/ui-vue-lite/)
> 基于 Material Design Lite 组件库 和 Vue.js 框架 的 UI 解决方案

## 特点

- 高度集成 Google 的 Material Design Lite 和 Material Design Icons，并扩展更多常用组件
- 开箱即用的高质量 Vue 组件，插件，混合方法及通用方法
- 基于 __[BalmJS](http://balmjs.com/)__ 的工作流，支持 ES2015+
- 支持多种使用方式

## 安装配置

### 1. 开发环境

推荐使用我们官方的 __[Balm CLI](https://github.com/balmjs/balm-cli)__ 来快速搭建 Vue 脚手架项目

```sh
npm install -g balm-cli

balm init vue my-project
```

### 2. 安装 BalmUI Lite

```sh
yarn add balm-ui-lite
# OR
npm i --save balm-ui-lite
```

### 3. 使用方式

#### 普通使用(Desktop开发推荐)

__`my-project/app/styles/global/_vendor.scss`__

```css
@import '../../../node_modules/balm-ui-lite/src/styles/balm-ui-lite.scss';
```

__`my-project/app/scripts/main.js`__

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
Vue.use(BalmUI.plugins.event);
```

#### 独立使用(Mobile开发推荐)
> 样式脚本完全模块化，打包小

```js
import Vue from 'vue';
import UiButton from 'balm-ui-lite/components/button';
import $event from 'balm-ui-lite/plugins/event';

import 'balm-ui-lite/components/core.css';
import 'balm-ui-lite/components/button.css';

Vue.component(UiButton.name, UiButton);
Vue.use($event);
```

## 完整文档

请查看 [BalmUI Lite 官网](http://balmjs.com/ui-vue-lite/)

### UI组件列表

- Layout
    - layout
    - grid
    - tabs
- Common
    - badge
    - button
    - chip
    - menu
    - tooltip
    - divider
    - icon
- Form
    - textfield
    - checkbox
    - radio
    - select
    - selectmenu
    - icon toggle
    - switch
    - slider
    - fileupload
    - autocomplete
    - datepicker
    - rangepicker
- Dataview
    - card
    - list
    - table
    - pagination
- Feedback
    - dialog
    - snackbar
- Loading
    - progress
    - spinner

### UI插件列表

- event
- alert
- confirm
- prompt
- toast
- notify
- validator

> BalmUI Lite 中还包含一些常用 _指令服务_ 和 _辅助方法_，具体请查看[官方文档](http://balmjs.com/ui-vue-lite/)

### 支持环境

| IE9 | IE10 | IE11 | Chrome | Opera | Firefox | Safari | Chrome (Android) | Mobile Safari |
|-----|------|------|--------|-------|---------|--------|------------------|---------------|
| B   | A    | A    | A      | A     | A       | A      | A                | A             |

- A 完全支持
- B 部分支持（需要 polyfills）

## 如何贡献

我们欢迎任何形式的贡献，有任何建议或意见，请给我们 [提问](https://github.com/balmjs/ui-vue-lite/issues)。


> __thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)__
