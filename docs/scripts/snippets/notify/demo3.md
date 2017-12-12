```html
<ui-button colored raised @click="$notify.add(options)">带有头像和多个按钮的</ui-button>
```

```js
export default {
  data () {
    return {
      options: {
        avatar: `path/to/avatar`,
        content: `Hey! It's you!`,
        buttons: [{
          text: 'Close'
        }, {
          text: 'Hello',
          handler: this.sayHello
        }]
      }
    }
  },
  methods: {
    sayHello () {
      alert(`Yes, it's me.\n Hello!`);
    }
  }
}
```
