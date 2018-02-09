<template>
  <div :class="className" @click="$_handleClick">
    <input
      v-show="false"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="$_handleChange($event)">
    <slot>
      <ui-button raised>
        <i class="material-icons">file_upload</i>
        请选择文件
      </ui-button>
    </slot>
  </div>
</template>

<script>
import UiButton from '../common/button';

const slice = [].slice;

const _createUid = () =>
  Math.floor((1 + Math.random()) * 0x10000).toString(16) + '-' + Date.now();

const _createFileObj = file => {
  return {
    uid: _createUid(),
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    sourceFile: file
  };
};

const _getPreviewSrc = fileObj => {
  return new Promise(function(resolve, reject) {
    if (fileObj.type.indexOf('image/') < 0) {
      reject(1); // 无法预览的文件类型
    } else {
      if (window.URL) {
        resolve(window.URL.createObjectURL(fileObj.sourceFile));
      } else if (window.FileReader) {
        let fr = new FileReader();
        fr.onload = function() {
          resolve(this.result);
        };
        fr.readAsDataURL(fileObj.sourceFile);
      } else {
        reject(2); // 当前浏览器无法支持本地预览
      }
    }
  });
};

export default {
  name: 'ui-file',
  components: {
    UiButton
  },
  props: {
    accept: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-file': true,
        'single-file': !this.multiple,
        'multiple-files': this.multiple
      };
    }
  },
  methods: {
    $_handleClick() {
      let input = this.$el.querySelector('input');
      input && input.click();
    },
    async $_handlePreview(fileObj) {
      fileObj.previewSrc = '';
      fileObj.previewError = 0;
      try {
        fileObj.previewSrc = await _getPreviewSrc(fileObj);
      } catch (e) {
        fileObj.previewError = e;
      }
    },
    $_handleChange(event) {
      let files = slice.call(event.target.files);
      if (files.length) {
        let arr = [];
        if (this.multiple) {
          arr = files.map(file => {
            let fileObj = _createFileObj(file);
            this.preview && this.$_handlePreview(fileObj);
            return fileObj;
          });

          this.$emit('change', arr);
        } else {
          let fileObj = _createFileObj(files[0]);
          this.preview && this.$_handlePreview(fileObj);
          this.$emit('change', [fileObj]);
        }

        event.target.value = '';
      }
    }
  }
};
</script>
