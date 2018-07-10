```html
<ui-button raised colored @click="balmUI.onOpen('show')">Scrolling Dialog</ui-button>

<ui-dialog maskClosable v-model="show">
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
