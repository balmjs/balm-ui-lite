## Plugins

- event
    - onChange
    - openDialog/showDialog
    - closeDialog/hideDialog
- alert
- confirm
- toast

---

__For 🌰__

```html
<template>
  <div>
    <ui-textfield :model="formData.name" @input="onChnage('formData.name', $event)"></ui-textfield>
    <ui-button @click.native="showAlert">show alert</ui-button>
    <ui-button @click.native="showConfirm">show confirm</ui-button>
    <ui-button @click.native="showToast">show toast</ui-button>
  </div>
</template>
```

```js
import Vue from 'vue';
import { plugins } from 'balm-ui-lite';

Vue.use(plugins.event);
Vue.use(plugins.alert);
Vue.use(plugins.confirm);
Vue.use(plugins.toast);

export default {
  data() {
    return {
      formData: {
        name: ''
      }
    };
  },
  methods: {
    showAlert() {
      this.$alert('Hello World');
      // or
      this.$alert({
        className: 'my-alert',
        title: 'my-title',
        message: 'some message',
        buttonText: 'OK'
      });
    },
    showConfirm() {
      this.$confirm('Are you sure?').then(() => {
        // ok
      }).catch(() => {
        // cancel
      });
      // or
      this.$confirm({
        className: 'my-confirm',
        title: 'my-title',
        message: 'some question',
        acceptText: 'OK',
        cancelText: 'Cancel',
        callback: result => {
          if (result) {
            // ok
          } else {
            // cancel
          }
        }
      });
    },
    showToast() {
      this.$toast('gg');
    }
  }
};
```
