```html
<ui-button colored raised @click.native="$notify.add(options)">输入like关闭</ui-button>
```

```js
const options = {
  timeout: 0,
  content: 'Do you like BalmUI?',
  buttons: [{
    text: 'like',
    handler: 'like'
  }]
};

export default {
  data () {
    return {
      options
    }
  },
  methods: {
    like (notify) {
      let result = prompt('say like!');
      if(result.toLowerCase() === 'like') {
        this.$notify.close(notify);
      }
    }
  },
  created () {
    this.$notify.addBtnHandler('like', this.like);
  }
}
```

