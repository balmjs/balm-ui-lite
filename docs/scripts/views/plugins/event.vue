<template>
  <div class="page--event">
    <div class="component-title">
      <h2>Event</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>我们注意到，当你触发一些表单事件（例如：input的change事件）或者触发一些组件的事件（例如弹框组件的打开和关闭）时，你需要在当前Vue实例下面注册事件的处理方法。就像下面：</p>
    <p>
      <ui-textfield :model="formData.name" @change="onChange($event)" placeholder="请输入"></ui-textfield>
      <br>
      你的输入：{{formData.name}}
    </p>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>这当然是无可厚非的做法，但是这些方法都大同小异，无非是改变当前实例下某个状态，可能接下来还要再处理一些额外的逻辑。</p>
    <p>赋值 -> 处理方法，如果每次都能够自动赋值（尤其是父子组件之间），那么我们仅仅需要添加一个处理方法就可以达到目的。</p>
    <p>为了实现上面的目的，我们开发了这个全局通用事件处理方法的插件。你仅仅需要调用这个插件的方法，然后专注自己的逻辑就行了！不用每次都在Vue实例的methods里面添加一个类似'onChange'的处理函数。</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4 class="line">示例</h4>
    <p>还是最开始的例子：</p>
    <p>
      <ui-textfield :model="formData.name" @change="balmUI.onChange('formData.name', $event.target.value.trim(), confirmHandler)" placeholder="请输入"></ui-textfield>
      <br>
      你的输入：{{formData.name}}
    </p>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>
    <p>比对代码，你会发现这一次我们没有为表单的change事件编写处理函数，但是依然成功的改变了状态。</p>
    <p>再来一个对话框组件的例子：</p>
    <p><ui-button raised colored @click="balmUI.onShow('dialog.show')">打开对话框组件</ui-button></p>
    <ui-dialog
      :open="dialog.show"
      @close="balmUI.onHide('dialog.show')"
      @confirm="balmUI.onHide('dialog.show', confirmHandler)">
      <ui-dialog-title>提示</ui-dialog-title>
      <ui-dialog-content>对话框组件</ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>
    <p>上面的示例展示了如何通过Event插件更改当前数据的状态，从而使我们只专注于自己的业务逻辑。</p>
    <h4 class="line">方法</h4>
    <p>Event插件包含以下方法：</p>
    <ul>
      <li>balmUI.onChange(property, value, fn)</li>
      <li>balmUI.onShow(property, fn) / balmUI.onOpen(property, fn)</li>
      <li>balmUI.onHide(property, fn) / balmUI.onClose(property, fn)</li>
    </ul>
    <p>下面是参数的具体含义：</p>
    <ui-apidoc name="plugin-event" :show-title="false"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Event'
  },
  data() {
    return {
      dialog: {
        show: false
      },
      formData: {
        name: ''
      }
    };
  },
  methods: {
    onChange(event) {
      this.formData.name = event.target.value.trim();
    },
    async confirmHandler() {
      // alert('你点击了OK按钮！');
      let result = await this.$http.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log(result);
    }
  },
  created() {
    this.showCode('event', 3);
  }
};
</script>

<style scoped>
h2.line {
  border-bottom: 1px solid #ddd;
}
</style>
