# [BalmUI Lite](https://mdl.balmjs.com/)

## 1.5.2 (2018.11.24)

### :beetle: Bug fixes

- `<ui-dialog>`: some bugfix

---

## 1.5.1 (2018.11.22)

### :beetle: Bug fixes

- `<ui-pagination>`: add default value for `prev` and `next` props

---

## 1.5.0 (2018.11.02)

### :tada: Update auto install

### :beetle: Bug fixes

- `<ui-button>`: some bugfix

---

## 1.4.1 (2018.08.07)

### :beetle: Bug fixes

- update validator

---

## 1.4.0 (2018.07.10)

### :tada: New features: Automatic assignment (`v-model`)

**Supported components:**

- Form elements
  - `<ui-textfield>`
  - `<ui-checkbox>`
  - `<ui-radio>`
  - `<ui-select>`
  - `<ui-selectmenu>`
  - `<ui-icon-toggle>`
  - `<ui-switch>`
  - `<ui-slider>`
  - `<ui-autocomplete>`
  - `<ui-datepicker>`
  - `<ui-rangepicker>`
- Others
  - `<ui-tabs>`
  - `<ui-table>`
  - `<ui-pagination>`
  - `<ui-dialog>`
  - `<ui-snackbar>`

**Example**

```html
// New: automatic assignment
<ui-textfield v-model="value"></ui-textfield>

// Old: manual assignment
<ui-textfield
  :model="value"
  @change="balmUI.onChange('value', $event)"
></ui-textfield>
```

---

## 1.3.0 (2018.05.07)

### :beetle: Bug fixes

- fix components entries' build bug

---

## <del>1.2.0 (2018.04.27)</del>

> `balm-ui-lite@1.2.0` is deprecated, upgrade to `1.3.0` please.

### :tada: New features

- upgrade to `balm@0.20`

### :gear: New components

- `<ui-circle>`

---

## 1.1.0 (2018.03.22)

- upgrade to `balm@0.17`

---

## 1.0.8 (2018.02.18)

### :beetle: Bug fixes and improvements

- update `<ui-table>` style
- update `<ui-select>` style for clip bug

### :page_with_curl: Update docs

- `<ui-pagination>`
- `<ui-selectmenu>`

---

## 1.0.7 (2018.02.06)

### :beetle: Bug fixes and improvements

- add `<ui-rangepicker>` sass variables
- update `<ui-file>` style

### :page_with_curl: Update docs

- `<ui-rangepicker>`

---

## 1.0.6 (2018.02.05)

### :beetle: Bug fixes and improvements

- add `<ui-select>` && `<ui-selectmenu>` sass variables

### :page_with_curl: Update docs

- `<ui-select>`
- `<ui-selectmenu>`

---

## 1.0.5 (2018.01.04)

### :beetle: Bug fixes and improvements

- fix `componentHandler` bug for node

### :memo: Test

- setup test

---

## 1.0.2 (2018.01.03)

### :beetle: Bug fixes and improvements

- fix **`<ui-layout-drawer>`** click link bug
- add spinner for docs

---

## 1.0.1 (2018.01.02)

### :beetle: Bug fixes and improvements

**Auto install plugins for `balm-ui-lite`**

```js
import Vue from 'vue';
import BalmUI from 'balm-ui-lite';

Vue.use(BalmUI); // include all plugins
```

**Update plugins config**

- event
- alert
- confirm
- prompt
- toast
- notify
- validator

### :page_with_curl: Update docs

- Plugins
  - event
  - alert
  - confirm
  - prompt
  - toast
  - notify
  - validator
- Directives
  - remove `lazy-load` docs (temporary)

---

## 1.0.0 (2018.01.01)

### :tada: New features

- individual package for components, plugins, directives and helpers
- new SASS variables for components
- global options for all components props' default value
- new docs for Chinese

### :beetle: Bug fixes and improvements

**`<ui-button>`**

- add `click` event

```html
<!-- 0.5.x `click.native` -->
<ui-button @click.native="onClick"></ui-button>

<!-- 1.0.0 `click` -->
<ui-button @click="onClick"></ui-button>
```

**`<ui-card>`**

- add subcomponents `<ui-card-head>` & `<ui-card-subtitle>`

**`<ui-list>`**

- add `<ui-item-primary>` & `<ui-item-secondary>`

**`<ui-pagination>`**

- add default slot for `mini` mode

**`<ui-textfield>`**

- add `icon` slot for `expandable` mode

**`<ui-table>`**

- add props `colgroup`

### :warning: Breaking changes (Migration from _0.5.x_)

**event plugin**

- rename `openDialog` to `onOpen`
- rename `closeDialog` to `onClose`
- rename `showDialog` to `onShow`
- rename `hideDialog` to `onHide`

```html
<!-- 0.5.x non namespace -->
<ui-textfield @input="onChange('formData.username', $event)"></ui-textfield>

<!-- 1.0.0 has namespace -->
<ui-textfield
  @input="BalmUI.onChange('formData.username', $event)"
></ui-textfield>
```

**`<ui-card>`**

- `<ui-card-text>` rename to `<ui-card-body>`
- `<ui-card>` props `dp` rename to `shadow`

**`<ui-list>`**

- `<ui-item-textbody>` rename to `<ui-item-body>`

**`<ui-loading>`**

- remove `<ui-loading>`
- separate into `<ui-progress>` & `<ui-spinner>`

**`<ui-menu>`**

- `<ui-menu>` props `btnId` rename to `dropdownId`

**`<ui-tooltip>`**

- update `title` slot

**`<ui-pagination>`**

- sass variable `$ui-pagination-active-color` is deprecated

**`<ui-autocomplete>`**

- remove event `response` & `enter`
- add event `search` & `selected`
- remove props `method`, `url`, `params`, `suggestion`
- add props `autoFocus`, `disabled`, `minLength`, `source`, `remote`

**`<ui-table>`**

- `<ui-table>` props `checkboxList` rename to `checkedList`

> Now, we use **`<ui-file>`** instead of **`<ui-fileupload>`**, **`<ui-fileupload>`** is deprecated.

### :gear: Components

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
  - icon (need fonts resource)
- Form
  - textfield
  - checkbox (need images resource)
  - radio
  - select
  - selectmenu
  - icon toggle
  - switch
  - slider
  - file
  - autocomplete
  - datepicker (need vendor stylesheet)
  - rangepicker (need vendor stylesheet)
- Dataview
  - card
  - list
  - table
  - pagination
- Feedback
  - dialog
  - snackbar
- Loading
  - progress (need images resource)
  - spinner

### :hammer_and_wrench: Plugins

- event
- alert
- confirm
- prompt
- toast
- notify
- validator

### :point_up: Directives

- <del>lazy-load</del>

### :reminder_ribbon: Helpers

- type
  - getType
  - isArray
  - isBoolean
  - isFunction
  - isNull
  - isNumber
  - isObject
  - isString
  - isSymbol
  - isUndefined
- ie
  - detectIE
- others
  - jsonEqual
  - isEmpty

---

## [0.5](https://github.com/balmjs/ui-vue-lite/blob/0.5/CHANGELOG.md)

---

## [0.1.x](https://github.com/balmjs/ui-vue-lite/blob/0.1.x/CHANGELOG.md)
