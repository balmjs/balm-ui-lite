<template>
  <div class="page--icon-toggle">
    <div class="component-title">
      <h3>Icon Toggle</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-icon-toggle value="b" icon="format_bold" :model="icons" @change="onIconsChange">
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo">
            <ui-icon-toggle value="i" icon="format_italic" :model="icons" @change="onIconsChange">
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="icon-toggle"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - IconToggle'
  },
  data() {
    return {
      icons: []
    };
  },
  methods: {
    onIconsChange(val) {
      this.icons = val;
    }
  },
  created() {
    this.showCode('icon-toggle');
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color: red;
}
</style>
