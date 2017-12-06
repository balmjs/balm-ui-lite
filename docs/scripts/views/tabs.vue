<template>
  <div class="page--tabs">
    <div class="component-title">
      <h3>Tabs</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-tabs demo-tabs__tabs">
              <ui-tabs :active="tab">
                <ui-tab-bar @change="balmUI.onChange('tab', $event)">
                  <ui-tab v-for="(item, index) in ['Tab1', 'Tab2', 'Tab3']" :key="index">
                    {{ item }}
                  </ui-tab>
                </ui-tab-bar>
                <ui-panel>
                  <p>Panel 1</p>
                </ui-panel>
                <ui-panel>
                  <p>Panel 2</p>
                </ui-panel>
                <ui-panel>
                  <p>Panel 3</p>
                </ui-panel>
              </ui-tabs>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="tabs"></ui-apidoc>
    <ui-apidoc name="tab-bar"></ui-apidoc>
    <ui-apidoc name="tab"></ui-apidoc>
    <ui-apidoc name="panel"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Tabs'
  },
  data() {
    return {
      tab: 0
    };
  },
  created() {
    this.showCode('tabs', 1);
  }
};
</script>
