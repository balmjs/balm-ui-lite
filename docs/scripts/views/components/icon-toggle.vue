<template>
  <div class="page--icon-toggle">
    <div class="component-title">
      <h2>Icon Toggle 图标选项</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. Material 图标</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-icon-toggle
              icon="format_bold"
              value="b"
              :model="checked1"
              @change="balmUI.onChange('checked1', $event)">
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo">
            <ui-icon-toggle
              icon="format_italic"
              value="i"
              :model="checked2"
              @change="balmUI.onChange('checked2', $event)">
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">Checked: {{ checked1 }}</div>
          <div class="snippet-caption">Checked: {{ checked2 }}</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. 自定义图标</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-icon-toggle
              value="qr"
              :model="checked3"
              @change="balmUI.onChange('checked3', $event)">
              <i class="fa fa-qrcode"></i>
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo">
            <ui-icon-toggle
              value="tv"
              :model="checked3"
              @change="balmUI.onChange('checked3', $event)">
              <i class="fa fa-tv"></i>
            </ui-icon-toggle>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">Checked: {{ checked3 }}</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="icon-toggle"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-icon-toggle>'
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: []
    };
  },
  created() {
    this.showCode('icon-toggle', 2);
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color: red;
}
</style>
