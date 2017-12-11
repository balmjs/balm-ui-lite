<template>
  <div class="page--dialog">
    <div class="component-title">
      <h3>Dialog</h3>
      <p>Modal windows for dedicated user input.</p>
    </div>

    <h4>Simple Dialog</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button @click="balmUI.onShow('show1')">Show Dialog</ui-button>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>
    <ui-dialog :open="show1" @close="balmUI.onClose('show1')" @confirm="onConfirm">
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
        <ui-button @click="balmUI.onShow('show2')">Show Modal</ui-button>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>
    <ui-dialog :open="show2" @close="balmUI.onClose('show2')" @confirm="onConfirm">
      <ui-dialog-content>
        <p>Allow this site to collect usage data to improve your experience?</p>
      </ui-dialog-content>
      <ui-dialog-actions fullWidth acceptText="Agree" cancelText="Disagree"></ui-dialog-actions>
    </ui-dialog>

    <h4>Dialog with scrolling</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button @click="balmUI.onShow('show3')">Show Scrolling Dialog</ui-button>
      </div>
      <!-- <ui-markdown :text="code[2]"></ui-markdown> -->
    </div>
    <ui-dialog maskClosable :open="show3" @close="balmUI.onClose('show3')">
      <ui-dialog-content>
        <p v-for="i in 20">Some content</p>
      </ui-dialog-content>
    </ui-dialog>

    <h4>Alert &amp; Confirm</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button @click="showAlert">show alert</ui-button>
        <ui-button @click="showConfirm">show confirm</ui-button>
        <ui-button @click="showToast">show toast</ui-button>
      </div>
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="dialog"></ui-apidoc>
    <ui-apidoc name="dialog-title"></ui-apidoc>
    <ui-apidoc name="dialog-content"></ui-apidoc>
    <ui-apidoc name="dialog-actions"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Dialog'
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },
  methods: {
    onConfirm(result) {
      console.log(`confirm result: ${result}`);
    },
    showAlert() {
      this.$alert('Hello').then(() => {
        console.log('World');
      });

      // this.$alert({
      //   message: 'Hello',
      //   callback: () => {
      //     console.log('World');
      //   }
      // });
    },
    showConfirm() {
      // this.$confirm('Are you sure?').then(() => {
      //   console.log('ok');
      // }).catch(() => {
      //   console.log('cancel');
      // });

      this.$confirm({
        message: 'Are you sure?',
        callback: result => {
          console.log(result);
        }
      });
    },
    showToast() {
      this.$toast('gg');
    }
  },
  created() {
    this.showCode('dialog', 3);
  }
};
</script>
