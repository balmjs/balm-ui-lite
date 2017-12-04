# [BalmUI Lite](http://balmjs.com/ui-vue-lite/)

## 0.6.0 (Coming Up)

🎉 __New feature: Individual Components__

### ⚠️ Breaking Changes

__event plugin__

- rename `openDialog` to `onOpen`
- rename `closeDialog` to `onClose`
- rename `showDialog` to `onShow`
- rename `hideDialog` to `onHide`

```html
<template>
  <ui-button @click.native="onOpen('show')"></ui-button>
  <ui-dialog :open="show" @close="onClose('show')">
    ...
  </ui-dialog>
</template>
```

```js
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
```

### Components

- `<ui-card-text>` rename to `<ui-card-body>`
- `<ui-item-textbody>` rename to `<ui-item-body>`
- add `<ui-item-primary>` & `<ui-item-secondary>`
- remove `<ui-loading>`
- add `<ui-progress>` & `<ui-spinner>`

---

## 0.5.21 (2017.11.24)

### Components

- `<ui-pagination>` add `position` props
- update `<ui-pagination>` css
- update `<ui-dialog-title>`: add close button

### Plugins

- remove `raised` props for default buttons in `alert` & `confirm`

### Docs

- notify
- pagination

---

## 0.5.20 (2017.11.22)

### Bugfix

- fix `<ui-rangepicker>` reset bug

---

## 0.5.19 (2017.11.17)

### New Plugins

- notify

### Bugfix

- fix `<ui-datepicker>` sync data bug

---

## 0.5.18 (2017.11.17)

### New Components

- `<ui-rangepicker>`

### Bugfix

- fix `<ui-datepicker>` bug for `range` mode

---

## 0.5.17 (2017.11.16)

### Components

- `<ui-textfield>` restore `change` event
- update `<ui-datepicker>` for `multiple` & `range` mode

---

## 0.5.16 (2017.09.26)

### Components

- restore `<ui-snackbar>` _type_ props default value to _0_
- add min & max attributes for `<ui-pagination>` input

---

## 0.5.15 (2017.09.25)

### Optimize components architecture

### Components

- `<ui-dialog>` add `maxHeight` props

### Bugfix

- fix `toast` css in mobile mode

### Docs

- update `advanced` docs
- update `dialog` docs

---

## 0.5.14 (2017.09.15)

### Components

- `<ui-dialog>` add `unlocked` props
- update `<ui-select>` & `<ui-pagination>` css

### Bugfix

- fix `alert` & `confirm` plugins' dependencies

### Docs

- add Kill IE docs

---

## 0.5.13 (2017.08.22)

### Bugfix

- `<ui-autocomplete>` IE10 bugfix

### Docs

- IE9 unsupported

---

## 0.5.12 (2017.08.21)

### Components

- filter `<ui-autocomplete>` html in value
- check form components callback value's type
- optimize `<ui-table>`

### Docs

- add `<ui-slider>` apidocs
- add `<ui-autocomplete>` apidocs
- add `<ui-datepicker>` apidocs

---

## 0.5.11 (2017.08.17)

### Components

- update `<ui-autocomplete>`
- update `<ui-textfield>` css for textarea

---

## 0.5.10 (2017.08.17)

### Components

- `<ui-fileupload>` add `autoReset` props
- `<ui-dialog>` remove `autoClose` props, add `closable` and `maskClosable` props

### Docs

- the apidoc component bugfix
- update plugins docs

### Plugins

- update `$alert`

---

## 0.5.9 (2017.08.16)

### Feature

- add `<ui-fileupload>` component

---

## 0.5.8 (2017.08.15)

### Feature

- `helpers` add `jsonEqual(a, b)`

### Components

- `<ui-textfield>` remove `keyup` event
- `<ui-pagination>` add `jumperButton` props, and update css
- update `<ui-checkbox>` demo

### Bugfix

- fix `<ui-autocomplete>`

---

## 0.5.7 (2017.08.15)

### Components

- update `<ui-autocomplete>`
- `<ui-textfield>` add `keyup` event

### Bugfix

- fix `<ui-textfield>` checkDirty bug

---

## 0.5.6 (2017.08.10)

### Components

- `<ui-select>` add new event `selected`

### Docs

- fix `<ui-tooltip>` demo
- update `<ui-select>` docs & demo

---

## 0.5.5 (2017.08.09)

### Bugfix

- restore `helpers.generateRandomAlphaNum(len)` for `<ui-tooltip>`

---

## 0.5.4 (2017.08.08)

### Bugfix

- fix `<ui-pagination>` jumper
- update form validator: `validate(formData, extraRules = {})`

### Docs

- helpers (new)
- mixins (new)
- plugins (new)
- update menu demo2

---

## 0.5.3 (2017.08.07)

### Bugfix

- `<ui-pagination>` will hide in recordCount = 0
- fix `<ui-radio>` and `<ui-checkbox`> checked
- check `<ui-textfield>` dirty value
- fix `<ui-pagination>` style

---

## 0.5.2 (2017.08.04)

### Feature

- add `helpers`
- add `mixins`

---

## 0.5.1 (2017.08.03)

- update build

---

## 0.5.0 (2017.08.02)

- update balm@0.8.4
- update dependencies
- refactor most of the components

---

## [0.1.x](https://github.com/balmjs/ui-vue-lite/blob/0.1.x/CHANGELOG.md)
