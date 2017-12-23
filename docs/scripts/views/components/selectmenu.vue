<template>
  <div class="page--select">
    <div class="component-title">
      <h3>Select Menu 下拉菜单(Moile端 更推荐使用<router-link to="/components/select">Select</router-link>)</h3>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-selectmenu>'
  },
  created() {
    // this.showCode('selectmenu', 2);
  }
};
</script>
