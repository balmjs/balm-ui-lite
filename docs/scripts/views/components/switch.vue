<template>
  <div class="page--switch">
    <div class="component-title">
      <h2>Switch 开关</h2>
      <p>开关选择器。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-switch v-model="open">{{ open ? 'On' : 'Off' }}</ui-switch>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="switch"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-switch>'
  },
  data() {
    return {
      open: true
    };
  },
  created() {
    this.showCode('switch');
  }
};
</script>
