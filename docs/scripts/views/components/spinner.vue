<template>
  <div class="page--spinner">
    <div class="component-title">
      <h3>Spinner 加载中</h3>
      <p>显示加载中状态。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

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
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">默认</div>
          <div class="snippet-caption">单色</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="spinner"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-spinner>'
  },
  created() {
    this.showCode('spinner', 1);
  }
};
</script>

