<template>
  <div class="page--badge">
    <div class="component-title">
      <h3>徽章</h3>
      <p>一个小的状态描述组件。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 非链接</h4>

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
      <ui-markdown :text="code[1]"></ui-markdown>
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
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <h4>2. 超链接</h4>

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
      <ui-markdown :text="code[3]"></ui-markdown>
    </div>

    <ui-apidoc name="badge"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - 徽章 <ui-badge>'
  },
  created() {
    this.showCode('badge', 3);
  }
};
</script>
