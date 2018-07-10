```html
<ui-button raised @click="balmUI.onShow('active')">Show Toast</ui-button>

<ui-snackbar
  v-model="active"
  :message="message"></ui-snackbar>
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
