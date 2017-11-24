<template>
  <div class="page--tooltip">
    <div class="component-title">
      <h3>Tooltip</h3>
      <p>Useful information on hover.</p>
    </div>

    <h4>{{ $t('tooltip.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-tooltip title="text1">tips 1</ui-tooltip>
          </div>
          <div class="snippet-demo">
            <ui-tooltip title="text2">tips 2</ui-tooltip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <h4>{{ $t('tooltip.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-tooltip>
              <template slot="title">
                <ui-icon>cloud_upload</ui-icon>
              </template>
              <span>new message</span>
            </ui-tooltip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="tooltip"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Tooltip'
  },
  created() {
    this.showCode('tooltip', 2);
  }
};
</script>
