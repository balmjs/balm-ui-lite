<template>
  <div class="page--spinner">
    <div class="component-title">
      <h3>Spinner 转菊花</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-spinner active></ui-spinner>
          </div>
          <div class="snippet-demo">
            <ui-spinner singleColor active></ui-spinner>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <!-- <ui-apidoc name="spinner"></ui-apidoc> -->

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-progress active></ui-progress>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <!-- <ui-apidoc name="progress"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Loading'
  },
  created() {
    this.showCode('progress', 1);
  }
};
</script>

