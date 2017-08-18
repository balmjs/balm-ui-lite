<template>
  <div class="page--upload">
    <div class="component-title">
      <h3>FileUpload</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-fileupload @change="onChange">
              <ui-icon>file_upload</ui-icon>
              <span>Upload</span>
            </ui-fileupload>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="fileupload"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  methods: {
    onChange(files, event) {
      console.log(files, event);

      let formData = new FormData();
      formData.append('file', files[0]);
      // some code
    }
  },
  created() {
    this.showCode('fileupload');
  }
};
</script>
