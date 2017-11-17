```html
<ui-button colored raised @click.native="$notify.add(options)">使用字符串映射预设的处理方法</ui-button>
```

```js
const options = {
  avatar: `path/to/avatar`,
  content: `Hey! It's you!`,
  progressColor: '#ff4081',
  buttons: [{
    text: 'Close'
  }, {
    text: 'Hello',
    handler: 'sayHello'
  }]
};

export default {
  data () {
    return {
      options
    }
  },
  methods: {
    sayHello () {
      alert(`Yes, it's me.\n Hello!`);
    }
  },
  created () {
    this.$notify.addBtnHandler('sayHello', this.sayHello);
  }
}
```
