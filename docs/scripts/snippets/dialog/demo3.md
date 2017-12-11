```html
<ui-button @click="showAlert">show alert</ui-button>
<ui-button @click="showConfirm">show confirm</ui-button>
<ui-button @click="showToast">show toast</ui-button>
```

```js
export default {
  methods: {
    showAlert() {
      this.$alert('Hello World');
    },
    showConfirm() {
      this.$confirm({
        message: 'Are you sure?',
        callback: result => {
          console.log(result);
        }
      });
    },
    showToast() {
      this.$toast('gg');
    }
  }
};
```
