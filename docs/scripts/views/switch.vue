<template>
  <div class="page--switch">
    <div class="component-title">
      <h3>Switch</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-switch :model="open" @change="onSwitchChange">{{ open ? 'On' : 'Off' }}</ui-switch>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="switch"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  data() {
    return {
      open: true
    };
  },
  methods: {
    onSwitchChange(val) {
      this.open = val;
    }
  },
  created() {
    this.showCode('switch');
  }
};
</script>
