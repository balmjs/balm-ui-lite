<template>
  <div class="page--progress">
    <div class="component-title">
      <h2>Progress Bar 进度条</h2>
      <p>展示操作的当前进度。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-progress progress="44"></ui-progress>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

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
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-progress progress="33" buffer="87"></ui-progress>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <ui-apidoc name="progress"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-progress>'
  },
  created() {
    this.showCode('progress', 3);
  }
};
</script>

