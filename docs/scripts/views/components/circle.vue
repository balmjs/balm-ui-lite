<template>
  <div class="page--circle">
    <div class="component-title">
      <h2>Circle 环形进度条</h2>
      <p>另一个用于展示进度的组件。区别于<router-link :to="{name: 'components.progress'}">进度条</router-link>。</p>
    </div>

    <h4>使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>示例</h4>
    <div class="demo">
      <div class="circle-container">
        <ui-circle 
          size="200px"
          :animate="animate"
          :stroke="stroke"
          :strokeWidth="strokeWidth"
          :progress="progress"
          :progressWidth="progressWidth"
          :progressColor="progressColor" 
          :strokeLinecap="strokeLinecap">
          {{progress}} %
        </ui-circle>
      </div>
      <div class="operate-panel">
        <p>
          启动过渡 [<strong>animate</strong>]:
          <br> 
          <ui-checkbox :model="animate" @change="balmUI.onChange('animate', $event)"></ui-checkbox>
        </p>
        <p>
          进度条 [<strong>progress</strong>]: 
          <br>
          <input type="range" min="0" max="100" v-model="progress">
        </p>
        <p>
          进度条宽度 [<strong>progressWidth</strong>]：
          <br>
          <input type="range" min="2" max="50" v-model="progressWidth">
        </p>
        <p>
          进度条背景宽度 [<strong>strokeWidth</strong>]：
          <br>
          <input type="range" min="2" max="50" v-model="strokeWidth">
        </p>
        <p>
          进度条边框风格 [<strong>strokeLinecap</strong>]：
          <br>
          <select v-model="strokeLinecap">
            <option :value="item.key" v-for="item in strokeLinecaps" :key="item.key">{{item.value}}</option>
          </select>
        </p>
        <p>
          进度条前景色 [<strong>progressCorlor</strong>]：
          <br>
          <input type="color" v-model="progressColor">
        </p>
        <p>
          进度条背景色 [<strong>stroke</strong>]：
          <br>
          <input type="color" v-model="stroke">
        </p>
      </div>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <ui-apidoc name="circle"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-circle>'
  },
  data() {
    return {
      animate: true,
      progress: 0,
      progressColor: '#ff4081',
      stroke: '#e4e7f6',
      strokeLinecap: 1,
      strokeWidth: 20,
      progressWidth: 20,
      strokeLinecaps: [
        {
          key: 0,
          value: 'butt'
        },
        {
          key: 1,
          value: 'round'
        },
        {
          key: 2,
          value: 'square'
        }
      ]
    };
  },
  created() {
    this.showCode('circle', 1);
  }
};
</script>
