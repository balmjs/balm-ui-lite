```html
<ui-button @click.native="showDialog('show')">Show Dialog</ui-button>
```

```html
<ui-dialog :open="show" @close="closeDialog('show')" @confirm="onConfirm">
  <ui-dialog-title>
    <h4>Allow data collection?</h4>
  </ui-dialog-title>
  <ui-dialog-content>
    <p>Allowing us to collect data will let us get you the information you want faster.</p>
  </ui-dialog-content>
  <ui-dialog-actions></ui-dialog-actions>
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
