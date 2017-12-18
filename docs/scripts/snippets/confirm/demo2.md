```html
<ui-button raised colored @click="openConfirm">打开另一个确认框</ui-button>
```

```js
export default {
  data () {
    return {
      content: 'Hello BalmUI'
    };
  },
  methods: {
    openConfirm () {
      this.$confirm({
        message: '你打开了确认窗！',
        callback: (result) => {
          if (result) {
            this.$alert(this.content);
          }
        }
      });
    }
  }
}
```
