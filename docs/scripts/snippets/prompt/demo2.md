```html
<ui-button raised colored @click="openConfirm">打开另一个确认框</ui-button>
```

```js
export default {
  data () {
    return {
      content: 'Hello'
    };
  },
  methods: {
    openPrompt () {
      this.$prompt({
        message: '请输入你的名字：',
        defaultValue: 'BalmUI',
        callback: (result) => {
          this.$alert(`${this.content} ${result}！`);
        }
      });
    }
  }
}
```
