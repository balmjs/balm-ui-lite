```html
<p>
  <ui-button colored raised @click="$notify.add(item1)">移除进度条的（不会再自动关闭）</ui-button>
  <ui-button raised @click="$notify.add(item2)">改变了进度条颜色的</ui-button>
</p>
```

```js
export default {
  data () {
    return {
      item1: {
        content: 'Hello BalmUI!',
        timeout: 0
      },
      item2: {
        content: 'Hello BalmUI!',
        progressColor: '#ff4081'
      }
    };
  }
}
```
