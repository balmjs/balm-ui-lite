```html
<ui-button raised colored @click="balmUI.onShow('show')">Scrolling Dialog</ui-button>
```

```html
<ui-dialog maskClosable :open="show" @close="balmUI.onClose('show')">
  <ui-dialog-content>
    <p v-for="i in 20">Some content</p>
  </ui-dialog-content>
</ui-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
};
```
