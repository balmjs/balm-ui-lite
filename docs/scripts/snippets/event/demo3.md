```html
<ui-button raised colored @click="balmUI.onShow('dialog.show')">打开对话框组件</ui-button>
<ui-dialog 
  :open="dialog.show" 
  @close="balmUI.onHide('dialog.show')" 
  @confirm="balmUI.onHide('dialog.show', confirmHandler)">
  <ui-dialog-title>提示</ui-dialog-title>
  <ui-dialog-content>对话框组件</ui-dialog-content>
  <ui-dialog-actions></ui-dialog-actions>
</ui-dialog>
```

```js
export default {
  data () {
    return {
      dialog: {
        show: false
      }
    }
  },
  methods: {
    confirmHandler () {
      alert('你点击了OK按钮！');
    }
  }
}
```
