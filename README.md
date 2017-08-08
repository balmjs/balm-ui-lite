# [BalmUI Lite](http://balmjs.com/ui-vue-lite/)
> Material Design Lite + Vue

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

__`/path/to/main.js`__

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI);
```

#### 3. Assets Config

> [images & fonts](http://balmjs.com/ui-vue-lite/assets.zip)

## UI components

- Layout
    - layout
    - navigation
    - grid
    - tabs
- Common
    - badge
    - button
    - chip
    - loading
    - menu
    - tooltip
    - divider (new)
- Form
    - slider
    - checkbox
    - radio
    - icon toggle
    - switch
    - textfield
    - select (new)
    - autocomplete (new)
    - datepicker (new)
- Data View
    - card
    - list
    - table
    - pagination (new)
- Popup
    - dialog
    - alert
    - confirm
    - snackbar


> __thx [BalmJS](http://balmjs.com/) & [Vue.js](https://vuejs.org/)__
