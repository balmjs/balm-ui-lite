<template>
  <figure class="page--home">
    <div class="banner">
      <img :src="require('../../images/assets/compindex.png')" alt="MDL">
    </div>
    <div class="guide">
      <h1>BalmUI Lite</h1>
      <p>基于 Material Design Lite 组件库 和 Vue.js 框架 的 UI 解决方案</p>
      <ui-button raised primary @click="$router.push('guide')">开始使用</ui-button>
    </div>
  </figure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Home'
  }
};
</script>
