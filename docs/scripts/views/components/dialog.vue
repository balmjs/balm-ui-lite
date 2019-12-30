<template>
  <div class="page--dialog">
    <div class="component-title">
      <h2>Dialog 对话框</h2>
      <p>可包含用户操作内容的模拟弹窗。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 普通对话框</h4>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button raised colored @click="balmUI.onOpen('show1')"
          >Simple Dialog</ui-button
        >
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>
    <ui-dialog v-model="show1" @confirm="onConfirm">
      <ui-dialog-title>
        <h4>Allow data collection?</h4>
      </ui-dialog-title>
      <ui-dialog-content>
        <p>
          Allowing us to collect data will let us get you the information you
          want faster.
        </p>
      </ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button raised colored @click="balmUI.onShow('show2')"
          >Dialog with full width actions</ui-button
        >
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>
    <ui-dialog v-model="show2" @confirm="onConfirm">
      <ui-dialog-content>
        <p>Allow this site to collect usage data to improve your experience?</p>
      </ui-dialog-content>
      <ui-dialog-actions
        fullWidth
        acceptText="Agree"
        cancelText="Disagree"
      ></ui-dialog-actions>
    </ui-dialog>

    <h4>2. 内容带滚轴的对话框</h4>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button raised colored @click="balmUI.onOpen('show3')"
          >Scrolling Dialog</ui-button
        >
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </div>
    <ui-dialog maskClosable v-model="show3">
      <ui-dialog-content>
        <p v-for="i in 20" :key="i">Some content {{ i }}</p>
      </ui-dialog-content>
    </ui-dialog>

    <h4>3. 警告框和确认框</h4>
    <p>
      请参照<router-link to="/plugins/alert">Alert</router-link>和<router-link
        to="/plugins/confirm"
        >Confrim</router-link
      >插件文档
    </p>

    <ui-apidoc name="dialog"></ui-apidoc>
    <ui-apidoc name="dialog-title"></ui-apidoc>
    <ui-apidoc name="dialog-content"></ui-apidoc>
    <ui-apidoc name="dialog-actions"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-dialog>'
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },
  created() {
    this.showCode('dialog', 3);
  },
  methods: {
    onConfirm(result) {
      console.log(`confirm result: ${result}`);
    }
  }
};
</script>
