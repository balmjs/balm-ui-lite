<template>
  <div class="page--alert">
    <div class="component-title">
      <h2>Alert</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>
      Alert插件是对dialog组件的封装。有时候我们只需要一个显示简单内容的警告框，如果采用组件引入的方式，会显得过于繁琐，此时Alert插件可以让你一行代码解决问题。
    </p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>关于可配置项的具体属性如下：</p>
    <ui-apidoc name="alert" :show-title="false"></ui-apidoc>

    <h4 class="line">方法</h4>
    <p>
      引入插件后，Vue实例将被注入$alert方法，该方法接收一个message参数，用于表示警告框内容；如果你想为警告框做更多设置，可以传入一个对象，对象的属性和上面全局预设属性完全一致。
    </p>

    <h3>示例</h3>
    <p>
      <ui-button raised colored @click="$alert('你打开了警告框！')"
        >打开警告框</ui-button
      >
    </p>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>通过这个插件，你可以很容易的创造一个简单的警告框。</p>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Alert'
  },
  created() {
    this.showCode('alert', 1);
  }
};
</script>

<style scoped>
h2.line {
  border-bottom: 1px solid #ddd;
}
</style>
