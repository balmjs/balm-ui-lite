<template>
  <div class="page--radio">
    <div class="component-title">
      <h3>Radio 单选框</h3>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-radio name="sex"
              value="M"
              :model="gender"
              @change="balmUI.onChange('gender', $event)">Male</ui-radio>
          </div>
          <div class="snippet-demo">
            <ui-radio name="sex"
              value="F"
              :model="gender"
              @change="balmUI.onChange('gender', $event)">Female</ui-radio>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">Picked: {{ gender }}</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="radio"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-radio>'
  },
  data() {
    return {
      gender: ''
    };
  },
  created() {
    this.showCode('radio');
  }
};
</script>
