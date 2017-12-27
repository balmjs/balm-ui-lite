```html
<p>
  <ui-file preview multiple @change="onChange"></ui-file>
</p>
<ul class="file-list">
  <li class="item" v-for="(file, index) in files">
    <transition name="flip">
      <div v-if="file.state === 'progress'" class="progress" key="progress">
        <ui-progress :progress="file.progress"></ui-progress>
        <ui-button raised icon="stop" @click="abort(file)"></ui-button>
      </div>
      <div v-else class="file-info" key="info">
        <div class="info">
          <ui-icon class="file-icon">attach_file</ui-icon>
          <span class="name">{{ file.name }}</span>
        </div>
        <div class="actions">
          <ui-button
            v-if="file.state === 'beforeUpload'"
            raised
            colored
            @click="uploadWithProgress(file)"
            icon="file_upload"></ui-button>
          <ui-button
            raised
            @click="remove(index)" icon="delete"></ui-button>
        </div>
      </div>
    </transition>
  </li>
</ul>
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
      files.forEach((file)=> {
        file.state = 'beforeUpload';
        file.progress = 0;
        file.request = null;
        this.files.push(file);
      });
    },
    async upload (file) {
      if(file.state === 'beforeUpload') {
      
        file.state = 'progress';

        let formData = new FormData();

        formData.append('file', file.sourceFile);

        file.request = new XMLHttpRequest();

        file.request.onload = () => {
          let data = JSON.parse(file.request.response);
          if(data) {
            this.$notify.add({content: `${file.name}上传成功！`});
            file.state = 'uploaded';
          }
        };

        file.request.onerror = () => {
          file.state = 'beforeUpload';
          file.progress = 0;
          this.$notify.add({content: `${file.name}上传失败！`});
        };
        
        file.request.onabort = () => {
          file.state = 'beforeUpload';
          file.progress = 0;
          this.$notify.add({content: `已取消了${file.name}的上传。`});
         };

        file.request.upload.onprogress = (e) => {
          if (e.total > 0) {
            file.progress = e.loaded / e.total * 100;
          }
        };

        file.request.open('post', this.postUrl, true);

        file.request.send(formData);
      }
    },
    abort (file) {
      file.request.abort();
    },
    uploadAllFiles () {
      this.files.forEach((file)=>{
        this.upload(file);
      });
    },
    remove (index) {
      this.files.splice(index, 1);
    }
  }
}
```

```css
.file-list {
  padding: 1em 0 0 0;
  width: 640px;
  max-width: 100%;
}

.file-list > .item {
  list-style: none;
  width: 100%;
  transform-style: preserve-3d;
  margin-bottom: 1em;
  position: relative;
}

.file-list > .item > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 1em;
  transform-origin: 50% 0;
}

.file-list .progress {
  background-color: #f8f8f8;
}

.file-list .file-info {
  background-color: #fff;
}

.file-list > .item .progress .mdl-progress {
  width: calc(100% - 47px);
}

.file-list > .item .progress .mdl-button {
  margin-left: 15px;
}

.file-list > .item .file-info > div {
  display: flex;
  align-items: center;
}

.file-list > .item .file-info .info {
  font-size: 14px;
}

.file-list > .item .file-icon {
  transform: rotate(-45deg);
  margin-right: .5em;
}

.file-list > .item .file-info .mdl-button + .mdl-button {
  margin-left: .5em;
}

.flip-enter-active, .flip-leave-active {
  transition: all .25s
}
.flip-enter, .flip-leave-to {
  transform: rotateX(-90deg);
}

.flip-leave-active {
  position: absolute;
  width: 100%;
  left: 0;
}
```
