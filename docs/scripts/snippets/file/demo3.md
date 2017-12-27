```html
<transition-group class="preview-list" name="list" tag="ul">
  <li class="item" v-for="(file, index) in files" :key="file.uid">
    <div class="inner">
      <span class="preview" :style="setBg(file)"></span>
      <span class="actions">
        <ui-button
          v-if="!file.uploaded"
          raised
          colored
          @click="upload(file)"
          icon="file_upload"></ui-button>
        <ui-button
          raised
          @click="remove(index)" icon="delete"></ui-button>
      </span>
    </div>
  </li>
  <li class="item add-btn" v-if="files.length < limit" key="add">
    <div class="inner">
      <ui-file preview multiple accept="image/*" @change="onChange3">
        <ui-icon class="add-icon">add</ui-icon>
      </ui-file>
    </div>
  </li>
</transition-group>
<p>
  <ui-button raised colored @click="uploadAllFiles">
    <ui-icon>file_upload</ui-icon>
    全部上传
  </ui-button>
</p>
```

```js
export default {
  data () {
    return {
      postUrl: 'https://jsonplaceholder.typicode.com/posts',
      files: []
    }
  },
  methods: {
    onChange (files) {
      if(files.length > this.limit - this.files.length) {
        this.$toast(`图片最多不能超过${this.limit}张！`);
      } else {
        files.forEach((file) => {
          file.uploaded = false;
          this.files.push(file);
        });
      }
    },
    async upload (file) {
      try {
        let res = await this.$http.post(this.postUrl, {
          file: file.sourceFile
        });
        if(res.data) {
          file.uploaded = true;
          this.$notify.add({content: `${file.name}上传成功！`});
        } else {
          this.$notify.add({content: `${file.name}上传失败！`});
        }
      } catch (e) {
        this.$notify.add({content: `${file.name}上传失败！`});
      }
    },
    uploadAllFiles () {
      this.files.forEach((file)=>{
        this.upload(file);
      });
    },
    remove (index) {
      this.files.splice(index, 1);
    },
    setBg ({previewSrc}) {
      return previewSrc ? {backgroundImage: `url(${previewSrc})`} : {};
    }
  }
}
```

```css
/* 继承上个例子的样式 */

.preview-list > .item .actions {
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
}

.preview-list > .item.add-btn .mdl-file {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  background-color: #fff;
}

.preview-list > .item.add-btn .add-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
}

```
