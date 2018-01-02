<template>
  <div class="page--toast">
    <div class="component-title">
      <h2>Toast</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>这个插件是对snackbar组件的封装，一个简单的短暂提示框。</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>其中可配置项的属性包括：</p>
    <ui-apidoc name="toast-config" :show-title="false"></ui-apidoc>

    <h4 class="line">方法</h4>
    <p>引入插件后，Vue实例将被注入$toast方法，该方法接收一个message参数，用于表示短暂提示内容；如果你想为短暂提示做更多设置，可以传入一个对象，对象的属性除了包含上面的全局预设属性，还包含一个'message'属性。</p>
    <h3>示例</h3>
    <p>
      <ui-button raised colored @click="$toast('短暂提示')">打开toast</ui-button>
      <ui-button raised colored @click="$toast({timeout: 5000, message: '时间较长的短暂提示'})">打开另一个toast</ui-button>
      <ui-button raised colored @click="$toast({timeout: 3000, className: 'my-custom-toast', message: '更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示'})">打开第三个toast</ui-button>
    </p>

    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <p>通过这个插件，你可以很容易的创造一个短暂提示框。</p>

  </div>
</template>

<script>
  import snippets from '../../mixins/snippets';

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - Toast'
    },
    created() {
      this.showCode('toast', 1);
    }
  }
</script>

<style scoped>
  h2.line {
    border-bottom: 1px solid #ddd;
  }
</style>
