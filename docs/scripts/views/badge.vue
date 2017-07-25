<template>
  <div class="demo-badge">
    <div class="component-title">
      <h3>Badges</h3>
      <p>Small status descriptors for UI elements.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-badge class="material-icons" overlap value="1">
              account_box
            </ui-badge>
          </div>
          <div class="snippet-demo">
            <ui-badge class="material-icons" overlap value="♥">
              account_box
            </ui-badge>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-badge value="4">
              Inbox
            </ui-badge>
          </div>
          <div class="snippet-demo">
            <ui-badge value="♥">
              Mood
            </ui-badge>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="badge"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    this.showCode('badge', 2);
  }
};
</script>
