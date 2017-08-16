```html
<ui-fileupload @change="onFileChange">
  <ui-icon>file_upload</ui-icon>
  <span>Upload</span>
</ui-fileupload>
```

```js
export default {
  methods: {
    onFileChange(files, event) {
      console.log(files, event);
    }
  }
};
```
