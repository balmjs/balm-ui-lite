<template>
  <div class="page--slider">
    <div class="component-title">
      <h3>Slider</h3>
      <p>Selecting a value out of a range.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-slider demo-slider__slider-default">
              <ui-slider min="0" max="100" :model="slider1" @change="onChange('slider1', $event)"></ui-slider>
            </div>
          </div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-slider demo-slider__slider-starting-value">
              <ui-slider min="0" max="100" :model="slider2" @change="onChange('slider2', $event)"></ui-slider>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="slider"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Slider'
  },
  data() {
    return {
      slider1: 0,
      slider2: 25
    };
  },
  created() {
    this.showCode('slider', 1);
  }
};
</script>
