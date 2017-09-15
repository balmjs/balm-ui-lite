## Create a vue project

Open a terminal window.

### Generate a new project and skeleton application by running the following commands:

```sh
balm init vue my-project
```

### Then install dependencies and [BalmUI Lite](https://github.com/balmjs/ui-vue-lite).

```sh
cd my-project

yarn
# or
npm install
```

```sh
yarn add balm-ui-lite
# or
npm install --save balm-ui-lite
```

## Setup project

### 1. CSS Config

__`/path/to/app/styles/global/_vendor.scss`__

```css
@import 'node_modules/balm-ui-lite/src/styles/main.scss';
```

### 2. JS Config

__`/path/to/app/scripts/main.js`__

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
Vue.use(BalmUI.plugins.event);
```

### 3. Assets Config

Copy [BalmUI assets](http://balmjs.com/ui-vue-lite/assets.zip) (images & fonts) to your project (__`/path/to/app/`__)
