<template>
  <div class="page--badge">
    <div class="component-title">
      <h3>Badge 徽章</h3>
      <p>小型的状态描述符组件。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 非链接 &lt;ui-badge&gt;</h4>

    <!-- Demo 1 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-badge icon overlap value="1">
              account_box
            </ui-badge>
          </div>
          <div class="snippet-demo">
            <ui-badge icon overlap value="♥">
              account_box
            </ui-badge>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">数字</div>
          <div class="snippet-caption">图标</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <!-- Demo 2 -->
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
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">数字</div>
          <div class="snippet-caption">图标</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <h4>2. 超链接 &lt;ui-badge-link&gt;</h4>

    <!-- Demo 3 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-badge-link icon overlap value="99+" href="/" target="_blank">
              email
            </ui-badge-link>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">超链接</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <ui-apidoc name="badge"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-badge>'
  },
  created() {
    this.showCode('badge', 3);
  }
};
</script>
