<template>
  <div class="page--radio">
    <div class="component-title">
      <h2>Radio button 单选框</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-radio name="sex" value="M" v-model="gender">Male</ui-radio>
          </div>
          <div class="snippet-demo">
            <ui-radio name="sex" value="F" v-model="gender">Female</ui-radio>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">Picked: {{ gender }}</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="radio"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

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
