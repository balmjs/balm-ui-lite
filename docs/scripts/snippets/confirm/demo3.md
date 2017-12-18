```js
export default {
  data () {
    return {
      content: 'Hello BalmUI'
    };
  },
  methods: {
    openConfirm () {
      this.$confirm('你打开了确认框！').then((result) => {
        if (result) {
          this.$alert(this.content);
        }
      });
    }
  }
}
```

```js
export default {
  data () {
    return {
      content: 'Hello BalmUI'
    };
  },
  methods: {
    async openConfirm () {
      if (await this.$confirm('你打开了确认框！')) {
        this.$alert(this.content);
      }
    }
  }
}
```
