<template>
  <div class="demo-chip">
    <div class="component-title">
      <h3>Chip</h3>
      <p>Represents complex entities in small blocks.</p>
    </div>

    <h4>Basic Chip</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-chip>
              <ui-chip-text>Basic Chip</ui-chip-text>
            </ui-chip>
          </div>
          <div class="snippet-demo">
            <ui-chip action>
              <ui-chip-text>Deletable Chip</ui-chip-text>
              <ui-chip-action></ui-chip-action>
            </ui-chip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <h4>Contact Chip</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-chip contact>
              <ui-chip-contact :class="['mdl-color--teal', 'mdl-color-text--white']">A</ui-chip-contact>
              <ui-chip-text>Contact Chip</ui-chip-text>
            </ui-chip>
          </div>
          <div class="snippet-demo">
            <ui-chip contact action>
              <ui-chip-contact>
                <img :src="avatar" alt="">
              </ui-chip-contact>
              <ui-chip-text>Deletable Contact Chip</ui-chip-text>
              <ui-chip-action></ui-chip-action>
            </ui-chip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <ui-apidoc name="chip"></ui-apidoc>
    <ui-apidoc name="chip-text"></ui-apidoc>
    <ui-apidoc name="chip-action"></ui-apidoc>
    <ui-apidoc name="chip-contact"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      avatar: require('../../images/assets/demos/user.jpg')
    };
  },
  created() {
    this.showCode('chip', 2);
  }
};
</script>
