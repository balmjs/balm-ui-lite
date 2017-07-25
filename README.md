# BalmUI
> Material Design + Vue + Idea

⚠ Migrated from balm-ui@0.1.x !important

## Installation & Setup

### 1. Requirement

- [BalmJS](http://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.x

### 2. Install

```sh
npm install --save balm-ui
```

### 3. Setup

#### 1. CSS Config

##### 1.1 Use Sass (Recommended)

__`/path/to/_vendor.scss`__

```css
@import 'node_modules/balm-ui-lite/src/styles/main.scss';
```

##### 1.2 Use JavaScript

```sh
npm install --save-dev sass-loader
```

__`gulpfile.js`__

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.scss$/,
      loader: 'sass'
    }],
    alias: {
      'balm-css': 'balm-ui-lite/src/styles/main.scss'
    }
  },
  ...
};
```

__`/path/to/yours_main.js`__

```js
import 'balm-css';
```

#### 2. JS Config

__`gulpfile.js`__

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      vue: 'vue/dist/vue.js',
      'balm-ui': 'balm-ui/src/index.js'
    }
  },
  ...
};
```

__`/path/to/yours_main.js`__

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

#### 3. Assets Config

> BalmUI [images & fonts](http://balmjs.com/ui-vue-lite/assets.zip)

## Components

### Layout

- [x] layout
- [x] grid
- [x] tabs
- [x] footer

### Common

- [x] badge
- [x] button
- [x] card
- [x] chip
- [x] loading
- [x] menu
- [x] tooltip
- [x] divider

### Form

- [x] textfield
- [x] checkbox
- [x] radio
- [x] icon toggle
- [x] switch
- [x] slider
- [x] select
- [x] autocomplete
- [x] datepicker

### Data View

- [x] list
- [x] table
- [x] pagination

### Popup

- [x] dialog
- [x] alert
- [x] confirm
- [x] snackbar


> __thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)__
