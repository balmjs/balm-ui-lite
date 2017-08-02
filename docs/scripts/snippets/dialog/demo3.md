```html
<ui-button @click.native="showAlert">show alert</ui-button>
<ui-button @click.native="showConfirm">show confirm</ui-button>
<ui-button @click.native="showToast">show toast</ui-button>
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
