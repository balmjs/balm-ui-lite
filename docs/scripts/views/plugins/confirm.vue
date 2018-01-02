<template>
  <div class="page--confirm">
    <div class="component-title">
      <h2>Confirm</h2>
    </div>

    <h4>概述</h4>
    <p>既然我们已经有了Alert插件，那么就没有理由不做一个Confirm插件。依然是对dialog的封装。如果你需要一个内容简单的确认框，这个插件可以很好的帮助你。</p>

    <h4>引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>关于可配置项的具体属性如下：</p>
    <ui-apidoc name="confirm" :show-title="false"></ui-apidoc>

    <h4>方法</h4>
    <p>引入插件后，Vue实例将被注入$confirm方法，该方法接收一个message参数，用于表示确认框内容；如果你想为确认框做更多设置，可以传入一个对象，对象的属性和上面全局预设属性完全一致。</p>

    <h4>示例</h4>
    <p><ui-button raised colored @click="$confirm('你打开了确认框！')">打开确认框</ui-button></p>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>通过这个插件，你可以很容易的创造一个简单的确认框。</p>
    <p>不过通常，我们要根据点击不同的按钮来区分逻辑，请看下面这个例子：</p>
    <p><ui-button raised colored @click="openConfirm">打开另一个确认框</ui-button></p>
    <ui-markdown :text="code[2]"></ui-markdown>
    <h6>这是使用confirm插件来处理逻辑的标准方式，但是由于$confirm方法返回的是一个Promise实例，所以它还有另外两种写法：</h6>
    <ui-markdown :text="code[3]"></ui-markdown>

    <p>你可以比较几种写法的区别。如果你不需要复写确认框的样式，我们强烈推荐使用最后一种方式。</p>
  </div>
</template>

<script>
  import snippets from '../../mixins/snippets';

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - Confirm'
    },
    data () {
    	return {
    		content: 'Hello BalmUI'
      };
    },
    methods: {
    	async openConfirm () {
        if(await this.$confirm('你打开了确认框！')){
          this.$alert(this.content);
        }
      }
    },
    created() {
      this.showCode('confirm', 3);
    }
  }
</script>
