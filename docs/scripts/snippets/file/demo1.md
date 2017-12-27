```html
<p><ui-file accept="image/*" @change="onChange"></ui-file></p>
<p>你选择的文件:</p>
<div v-if="files.length">
  {{ files }}
</div>
```

```js
export default {
  data () {
    return {
      files: []
    }
  },
  methods: {
    onChange (files) {
      this.files = files;
    }
  }
}
```
