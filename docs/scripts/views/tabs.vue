<template>
  <div class="page--tabs">
    <div class="component-title">
      <h3>Tabs</h3>
    </div>

    <h4>{{ $t('tabs.basic') }}</h4>
    <div class="snippet-demo">
      <ui-tabs :active="tab">
        <ui-tab-bar @change="onChange">
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
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('tabs.materialIcon') }}</h4>
    <div class="snippet-demo">
      <ui-tabs :active="tab2">
        <ui-tab-bar @change="onChange2">
          <ui-tab v-for="(item, index) in ['edit', 'delete']" :key="index">
            <ui-icon>{{ item }}</ui-icon>
          </ui-tab>
        </ui-tab-bar>
        <ui-panel>
          <p>Material icon1</p>
        </ui-panel>
        <ui-panel>
          <p>Material icon2</p>
        </ui-panel>
      </ui-tabs>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>{{ $t('tabs.customIcon') }}</h4>
    <div class="snippet-demo">
      <ui-tabs :active="tab3">
        <ui-tab-bar @change="onChange3">
          <ui-tab v-for="(item, index) in ['qrcode', 'tv']" :key="index">
            <i :class="['fa', `fa-${item}`]"></i>
          </ui-tab>
        </ui-tab-bar>
        <ui-panel>
          <p>QR code</p>
        </ui-panel>
        <ui-panel>
          <p>PC</p>
        </ui-panel>
      </ui-tabs>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

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
  data() {
    return {
      tab: 0,
      tab2: 0,
      tab3: 0
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    },
    onChange2(tab) {
      this.tab2 = tab;
    },
    onChange3(tab) {
      this.tab3 = tab;
    }
  },
  created() {
    this.showCode('tabs', 3);
  }
};
</script>
