<template>
  <div class="page--dialog">
    <div class="component-title">
      <h3>Dialog</h3>
      <p>Modal windows for dedicated user input.</p>
    </div>

    <h4>Simple Dialog</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button @click.native="showDialog('show1')">Show Dialog</ui-button>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>
    <ui-dialog :open="show1" @close="closeDialog('show1')" @confirm="onConfirm">
      <ui-dialog-title>
        <h4>Allow data collection?</h4>
      </ui-dialog-title>
      <ui-dialog-content>
        <p>Allowing us to collect data will let us get you the information you want faster.</p>
      </ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>

    <h4>Dialog with full width actions</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button @click.native="showDialog('show2')">Show Modal</ui-button>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>
    <ui-dialog :open="show2" @close="closeDialog('show2')" @confirm="onConfirm">
      <ui-dialog-content>
        <p>Allow this site to collect usage data to improve your experience?</p>
      </ui-dialog-content>
      <ui-dialog-actions fullWidth acceptText="Agree" cancelText="Disagree"></ui-dialog-actions>
    </ui-dialog>

    <ui-apidoc name="dialog"></ui-apidoc>
    <ui-apidoc name="dialog-title"></ui-apidoc>
    <ui-apidoc name="dialog-content"></ui-apidoc>
    <ui-apidoc name="dialog-actions"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      show1: false,
      show2: false
    };
  },
  methods: {
    onConfirm(result) {
      console.log(`confirm result: ${result}`);
    }
  },
  created() {
    this.showCode('dialog', 2);
  }
};
</script>
