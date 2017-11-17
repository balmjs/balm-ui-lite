```html
<!-- in template -->
<div @click="$notify.add(options)">open nptify</div>
```

```js
// in Vue instance
export default {
  methods: {
    Hello () {
      this.$notify.add({content: 'Hello BalmUI!'});
    }
  }
}

```
