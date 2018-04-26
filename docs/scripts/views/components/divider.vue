<template>
  <div class="page--divider">
    <div class="component-title">
      <h2>Divider 分割线</h2>
      <p>有些人喜欢使用分割线，所以我们开发了这个组件</p>
    </div>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4 class="line">使用方法</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="w320">
              <ui-divider>割</ui-divider>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <ui-divider>特别长的分割线</ui-divider>

    <p>我们甚至做了一个垂直的分割线：</p>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="demo-divider-container">
              <div class="a"></div>
              <ui-divider type="vertical">or</ui-divider>
              <div class="b"></div>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>

    <ui-divider>特别长的分割线</ui-divider>

    <p>有时候你可能会想改变分割线的颜色, 这里有一个简单的方法:</p>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="w320 colored">
              <ui-divider>divider</ui-divider>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>

    <ui-apidoc name="divider"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-divider>'
  },
  created() {
    this.showCode('divider', 3);
  }
};
</script>

<style scoped>
h2.line {
  border-bottom: 1px solid #ddd;
}
</style>
