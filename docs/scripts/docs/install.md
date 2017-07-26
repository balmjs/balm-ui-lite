## Installation & Setup

### 0. Requirement

- [BalmJS](http://balmjs.com/)
- [Vue.js](https://vuejs.org/)@2.1.0+

### 1. Install

```sh
npm install --save balm-ui-lite
```

### 2. Setup

#### 2.1 CSS Config

__`/path/to/_vendor.scss`__

```css
@import 'node_modules/balm-ui-lite/src/styles/main.scss';
```

#### 2.2 JS Config

__`gulpfile.js`__

```js
balm.config = {
  ...
  scripts: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui-lite.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      'balm-ui': 'balm-ui-lite/src/index.js'
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

### 3. Assets Config

- Copy [BalmUI assets](http://balmjs.com/ui-vue-lite/assets.zip) (images & fonts) to your project
