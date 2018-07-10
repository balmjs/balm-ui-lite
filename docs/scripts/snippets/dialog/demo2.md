```html
<ui-button raised colored @click="balmUI.onShow('show')">Dialog with full width actions</ui-button>

<ui-dialog v-model="show" @confirm="onConfirm">
  <ui-dialog-content>
    <p>Allow this site to collect usage data to improve your experience?</p>
  </ui-dialog-content>
  <ui-dialog-actions fullWidth acceptText="Agree" cancelText="Disagree"></ui-dialog-actions>
</ui-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    onConfirm(result) {
      console.log(`confirm result: ${result}`);
    }
  }
};
```
