<template>
  <div class="page--file">
    <div class="component-title">
      <h2>File 文件处理</h2>
    </div>

    <h4>概述</h4>
    <p>这个组件最开始叫做file-upload，因为我们把上传功能包含了进去。我们还根据常用的业务分为普通文件上传，头像上传、是否需要预览等几种情况，但是随着配置属性个数（20+）、抛出的事件（8种）和界面特性（1个默认插槽 + 3个具名插槽）的不断增加，我们开始反思：<strong>组件的意义是什么？</strong>业务是不可能全部涵盖的，尤其是界面，只需要产品经理一句话就能全盘否定，那么为什么我们要开发一个几百行代码又没什么扩展性的组件？难道有谁愿意在一堆配置参数中翻来覆去思考它们的用法，或者为满足需求重写几十行样式？</p>
    <p>在弄清楚整个组件的实际作用之后，我们删除了大部分功能，只把最核心的部分保留了下来，配置参数减少到了3个，而且只有一个事件和一个默认插槽，我们觉得整个组件变得非常灵活。</p>

    <h4>引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>用法</h4>
    <h6>1.基本用法(单选 + 文件类型限定)</h6>
    <p><ui-file accept="image/*" @change="balmUI.onChange('files1', $event)"></ui-file></p>
    <p>你选择的文件:</p>
    <div v-if="files1.length">
      {{ files1 }}
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <h6>2.多选 + 文件类型限定 + 图片预览</h6>
    <p><ui-file preview multiple accept="image/*" @change="balmUI.onChange('files2', $event)"></ui-file></p>
    <transition-group class="preview-list" name="list" tag="ul">
      <li class="item" v-for="(file, index) in files2" :key="file.uid">
        <div class="inner">
          <span class="preview" :style="setBg(file)"></span>
          <span class="name">{{file.name}}</span>
        </div>
      </li>
    </transition-group>
    <ui-accordion>
      <ui-markdown :text="code[2]"></ui-markdown>
    </ui-accordion>

    <h6>3.经典多图上传</h6>
    <transition-group class="preview-list" name="list" tag="ul">
      <li class="item" v-for="(file, index) in files3" :key="file.uid">
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
              @click="remove('files3', index)" icon="delete"></ui-button>
          </span>
        </div>
      </li>
      <li class="item add-btn" v-if="files3.length < limit" key="add">
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
    <ui-accordion>
      <ui-markdown :text="code[3]"></ui-markdown>
    </ui-accordion>

    <h6>4.上传带进度条</h6>
    <p>
      <ui-file preview multiple @change="onChange4"></ui-file>
    </p>
    <ul class="file-list">
      <li class="item" v-for="(file, index) in files4">
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
                @click="remove('files4', index)" icon="delete"></ui-button>
            </div>
          </div>
        </transition>
      </li>
    </ul>
    <p>
      <ui-button raised colored @click="uploadAllFilesWithProgress">
        <ui-icon>file_upload</ui-icon>
        全部上传
      </ui-button>
    </p>
    <ui-accordion>
      <ui-markdown :text="code[4]"></ui-markdown>
    </ui-accordion>

    <h4>补充说明</h4>
    <p>上面的例子表明，你可以从组件的change事件处理方法的参数中获得一个文件数组，这是对原生FileList对象的包装。数组的每项都是一个对象，包含以下属性：</p>
    <ui-apidoc name="file-arguments-props" :show-title="false"></ui-apidoc>
    <h6>当组件设置preview时，组件内部优先使用URL.createObjectURL方法生成Blob url，如果不支持则使用FileReader对象的readAsDataURL方法获取base64。如果你的浏览器支持Blob url，当你不再需要某个预览的文件时，可以使用URL.revokeObjectURL方法取消浏览器对该文件的引用。</h6>
    <p>下面是组件的api说明：</p>
    <ui-apidoc name="file"></ui-apidoc>
  </div>
</template>
<script>
  import snippets from '../../mixins/snippets';

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - <ui-file>'
    },
    data () {
      return {
        files1: [],
        files2: [],
        files3: [],
        files4: [],
        postUrl: 'https://jsonplaceholder.typicode.com/posts',
        limit: 5
      };
    },
    methods: {
      onChange3 (files) {
        if(files.length > this.limit - this.files3.length) {
          this.$toast(`图片最多不能超过${this.limit}张！`);
        } else {
          files.forEach((file) => {
            file.uploaded = false;
            this.files3.push(file);
          });
        }
      },
      onChange4 (files) {
        files.forEach((file)=> {
          file.state = 'beforeUpload';
          file.progress = 0;
          file.request = null;
          this.files4.push(file);
        });
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
      uploadWithProgress (file) {
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
      uploadAllFilesWithProgress() {
        this.files4.forEach((file) => {
          this.uploadWithProgress(file);
        });
      },
      abort (file) {
        file.request.abort();
      },
      uploadAllFiles () {
        this.files3.forEach((file)=>{
          this.upload(file);
        });
      },
      remove (name, index) {
        this[name].splice(index, 1);
      },
      setBg ({previewSrc}) {
        return previewSrc ? {backgroundImage: `url(${previewSrc})`} : {};
      }
    },
    created() {
      this.showCode('file', 4);
    }
  }
</script>
