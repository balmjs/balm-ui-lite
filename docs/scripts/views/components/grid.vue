<template>
  <div class="page--grid">
    <div class="component-title">
      <h2>Grid 栅格</h2>
      <p>12 栅格系统。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-grid demo-grid__grid">
              <ui-grid>
                <ui-cell
                  v-for="(i, index) in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
                  :key="index"
                  :col="i"
                  >{{ i }}</ui-cell
                >
              </ui-grid>
              <ui-grid>
                <ui-cell
                  v-for="(i, index) in [4, 4, 4]"
                  :key="index"
                  :col="i"
                  >{{ i }}</ui-cell
                >
              </ui-grid>
              <ui-grid>
                <ui-cell col="6">6</ui-cell>
                <ui-cell col="4">4</ui-cell>
                <ui-cell col="2">2</ui-cell>
              </ui-grid>
              <ui-grid>
                <ui-cell :col="{ col: 6, tablet: 8 }">6 (8 tablet)</ui-cell>
                <ui-cell :col="{ col: 4, tablet: 6 }">4 (6 tablet)</ui-cell>
                <ui-cell :col="{ col: 2, phone: 4 }">2 (4 phone)</ui-cell>
              </ui-grid>
            </div>
          </div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="grid"></ui-apidoc>
    <ui-apidoc name="cell"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-grid>'
  },
  created() {
    this.showCode('grid');
  }
};
</script>
