<template>
  <div class="page--confirm">
    <div class="component-title">
      <h2>Prompt</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>要不要开发Prompt组件的问题让我们打了几架。不过最终我们还是没忍住开发了。这下Alert、Confirm和Prompt组件终于齐聚一堂。</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>关于可配置参数<strong>options</strong>的具体属性如下：</p>
    <ui-apidoc name="prompt-config" :show-title="false"></ui-apidoc>

    <h4 class="line">方法</h4>
    <p>引入插件后，Vue实例将被注入$prompt方法，该方法拥有两个参数：</p>
    <ui-apidoc name="prompt-arguments" :show-title="false"></ui-apidoc>

    <p>其中<strong>message</strong>参数可以是一个对象，其属性和全局预设属性几乎完全一致，但是多出了一个defaultValue属性，该属性将用于设置提示框表单默认值；且当<strong>message</strong>参数为一个对象时，$prompt方法会忽略第二个参数[default]。</p>

    <h4>示例</h4>
    <p><ui-button raised colored @click="$prompt('你打开了提示框准备输入些什么')">打开提示框</ui-button></p>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>通过这个插件，你可以很容易的创造一个简单的提示框。</p>
    <p>不过通常，我们要处理输入的值，请看下面这个例子：</p>
    <p><ui-button raised colored @click="openPrompt">打开另一个提示框</ui-button></p>
    <ui-markdown :text="code[2]"></ui-markdown>
    <p>这是使用Prompt插件来处理逻辑的标准方式，但是由于$prompt方法返回的是一个Promise实例，所以它还有另外两种写法：</p>
    <ui-markdown :text="code[3]"></ui-markdown>
    <p>你可以比较几种写法的区别。如果你不需要复写提示框的样式，我们强烈推荐使用最后一种方式。这将会和window.prompt用法保持一致。</p>
  </div>
</template>

<script>
  import snippets from '../../mixins/snippets';

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - Prompt'
    },
    data () {
      return {
        content: 'Hello'
      };
    },
    methods: {
      async openPrompt () {
        let result = await this.$prompt('请输入你的名字：', 'BalmUI');
        this.$alert(`${this.content} ${result}！`);
      }
    },
    created() {
      this.showCode('prompt', 3);
    }
  }
</script>

<style scoped>
  h2.line {
    border-bottom: 1px solid #ddd;
  }
</style>
