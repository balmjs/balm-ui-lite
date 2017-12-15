```html
<ui-button raised @click="balmUI.onShow('active')">Show Toast</ui-button>

<ui-snackbar
  :active="active"
  :message="message"
  @done="balmUI.onHide('active')"></ui-snackbar>
```

```js
export default {
  data() {
    return {
      active: false,
      message: 'Your message'
    };
  }
};
```
