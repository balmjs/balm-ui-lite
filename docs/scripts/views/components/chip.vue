<template>
  <div class="page--chip">
    <div class="component-title">
      <h3>Chip</h3>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. Basic Chip</h4>

    <!-- Demo 1 -->
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
            <ui-chip v-if="show1" action>
              <ui-chip-text>Deletable Chip</ui-chip-text>
              <ui-chip-action @click.native="balmUI.onHide('show1')"></ui-chip-action>
            </ui-chip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. Contact Chip</h4>

    <!-- Demo 2 -->
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
            <ui-chip v-show="show2" contact action>
              <ui-chip-contact>
                <img :src="avatar" alt="">
              </ui-chip-contact>
              <ui-chip-text>Deletable Contact Chip</ui-chip-text>
              <ui-chip-action @click.native="balmUI.onHide('show2')">
                <i class="fa fa-close"></i>
              </ui-chip-action>
            </ui-chip>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="chip"></ui-apidoc>
    <ui-apidoc name="chip-text"></ui-apidoc>
    <ui-apidoc name="chip-action"></ui-apidoc>
    <ui-apidoc name="chip-contact"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Chip <ui-chip>'
  },
  data() {
    return {
      avatar: require('../../../images/assets/demos/user.jpg'),
      show1: true,
      show2: true
    };
  },
  created() {
    this.showCode('chip', 2);
  }
};
</script>
