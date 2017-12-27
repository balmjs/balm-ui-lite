<template>
  <div class="page--tooltip">
    <div class="component-title">
      <h2>Tooltip 文字提示</h2>
      <p>简单的文字提示气泡框。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 简单文字提示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-tooltip title="Follow">
              <ui-icon>add</ui-icon>
            </ui-tooltip>
          </div>
          <div class="snippet-demo">
            <ui-tooltip title="Print" large>
              <ui-icon>print</ui-icon>
            </ui-tooltip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 自定义文字提示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-tooltip>
              Upload
              <template slot="title">
                <ui-icon>cloud_upload</ui-icon>
              </template>
            </ui-tooltip>
          </div>
          <div class="snippet-demo">
            <ui-tooltip>
              <ui-icon>share</ui-icon>
              <template slot="title">
                Share your content<br>via social media
              </template>
            </ui-tooltip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="tooltip"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-tooltip>'
  },
  created() {
    this.showCode('tooltip', 2);
  }
};
</script>
