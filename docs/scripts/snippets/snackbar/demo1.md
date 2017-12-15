
```html
<ui-button raised @click="balmUI.onShow('active')">Show Snackbar</ui-button>

<ui-snackbar :type="1"
  :active="active"
  :message="message"
  :timeout="3000"
  :actionHandler="actionHandler"
  actionText="Undo"
  @done="balmUI.onHide('active')"></ui-snackbar>
```

```js
export default {
  data() {
    return {
      active: false,
      message: 'Your message'
    };
  },
  methods: {
    actionHandler() {
      this.active = false;
    }
  }
};
```
