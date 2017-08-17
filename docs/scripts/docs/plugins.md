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
      // usage 1
      this.$alert('Hello').then(() => {
        console.log('World');
      });

      // usage 2
      this.$alert({
        className: 'my-alert',
        title: 'my-title',
        message: 'some message',
        buttonText: 'OK',
        callback: () => {
          // do something
        }
      });
    },
    showConfirm() {
      // usage 1
      this.$confirm('Are you sure?').then(() => {
        // ok
      }).catch(() => {
        // cancel
      });

      // usage 2
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
