```js
export default {
  data () {
    return {
      content: 'Hello'
    };
  },
  methods: {
    openPrompt () {
      this.$prompt('请输入你的名字：', 'BalmUI').then((result) => {
        this.$alert(`${this.content} ${result}！`);
      });
    }
  }
}
```

```js
export default {
  data () {
    return {
      content: 'Hello'
    };
  },
  methods: {
    async openPrompt () {
      let result = await this.$prompt('请输入你的名字：', 'BalmUI');
      this.$alert(`${this.content} ${result}！`);
    }
  }
}
```
