```html
<ui-button @click.native="showDialog('show')">Show Modal</ui-button>
```

```html
<ui-dialog :open="show" @close="closeDialog('show')" @confirm="onConfirm">
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
