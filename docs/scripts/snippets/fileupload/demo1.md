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
      let formData = new FormData();
      formData.append('file', files[0]);
      // your code
    }
  }
};
```
