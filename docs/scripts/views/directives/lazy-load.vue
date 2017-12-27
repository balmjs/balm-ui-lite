<template>
  <div class="page--lazy-load">
    <div class="component-title">
      <h2>Lazy Load</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>一个懒加载指令。</p>
    <p>注意：这个指令PC端不兼容IE11以下，移动端不能兼容ios</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4 class="line">使用</h4>
    这里有一个示例：
    <div class="image-list" v-lazy-load>
      <div class="item" v-for="image in images">
        <span :data-src="image"></span>
      </div>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>使用'v-lazy-load'指令在需要滚动的容器上，然后使用data-src自定义属性设置图片路径。</p>
    <p>如果你使用img标签，则自动设置src属性；其他标签会自动设置css背景图片样式。</p>
  </div>
</template>
<script>
  import snippets from '../../mixins/snippets';

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - lazy-load'
    },
    data () {
      return {
      	images: [
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s031.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s032.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s033.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s034.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s035.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s036.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s037.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s038.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s039.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s040.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s041.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s042.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s043.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s044.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s045.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s046.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s047.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s048.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s049.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s050.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s051.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s052.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s053.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s054.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s055.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s056.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s057.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s058.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s059.jpg",
          "http://image5.tuku.cn/pic/dongwushijie/endearing_beastie_188/s060.jpg"
        ]
      };
    },
    methods: {},
    created() {
      this.showCode('lazy-load', 1);
    }
  }
</script>
<style scoped>
  h2.line {
    border-bottom: 1px solid #ddd;
  }

  .divider {
    height: 0;
    width: 100%;
    margin-bottom: 4em;
  }

  .image-list {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 0 1px 1em;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: calc(300px + 2em);
    height: calc(300px + 2em);
    overflow: auto;
    margin: 1em 0;
  }

  .image-list > .item {
    width: 100%;
    padding-right: 1em;
    margin-bottom: 1em;
  }

  .image-list > .item > span {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
