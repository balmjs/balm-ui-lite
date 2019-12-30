<template>
  <div class="page--slider">
    <div class="component-title">
      <h2>Slider 滑动条</h2>
      <p>滑动型输入器，展示当前值和可选范围。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 代码演示</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div
              class="snippet-demo-container demo-slider demo-slider__slider-default"
            >
              <ui-slider min="0" max="100" v-model="value1"></ui-slider>
            </div>
          </div>
          <div class="snippet-demo">
            <div
              class="snippet-demo-container demo-slider demo-slider__slider-starting-value"
            >
              <ui-slider min="0" max="100" v-model="value2"></ui-slider>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">默认滑动条</div>
          <div class="snippet-caption">带初始值的滑动条</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="slider"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-slider>'
  },
  data() {
    return {
      value1: 0,
      value2: 25
    };
  },
  created() {
    this.showCode('slider', 1);
  }
};
</script>
