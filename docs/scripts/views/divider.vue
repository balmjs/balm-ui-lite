<template>
  <div class="page--divider">
    <div class="component-title">
      <h3>Divider</h3>
      <p>Some guys like to use dividers, so we made this component.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="w320">
              <ui-divider>divider</ui-divider>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-divider>diiiiiiiiiiivider!</ui-divider>

    <p>We even made a vertical divider.</p>
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
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <ui-divider>diiiiiiiiiiivider!</ui-divider>

    <p>Sometimes you may want to change the color of the dividing line, there is a  simple way here:</p>

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
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="divider"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Divider'
  },
  created() {
    this.showCode('divider', 3);
  }
};
</script>
