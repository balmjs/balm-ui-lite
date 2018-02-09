<template>
  <div class="page--menu">
    <div class="component-title">
      <h2>Menu 菜单</h2>
      <p>向下弹出的列表。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认菜单</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button id="demo-menu-1" icon="more_vert"></ui-button>
            <ui-menu dropdownId="demo-menu-1"
              :menu="data"
              @selected="onMenu"></ui-menu>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 自定义菜单</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button id="demo-menu-2" icon="settings"></ui-button>
            <ui-menu dropdownId="demo-menu-2">
              <ui-menuitem v-for="(item, index) in data" :key="index"
                :disabled="item.disabled"
                :divider="item.divider"
                @click="onMenu(item)">
                <span v-if="item.disabled">{{ item.label }}</span>
                <a v-else :href="item.url">{{ item.label }}</a>
              </ui-menuitem>
            </ui-menu>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import docs from '../../docs/components/menu.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-menu>'
  },
  data() {
    return {
      docs,
      data: [
        {
          label: 'Some Action',
          url: '#1'
        },
        {
          label: 'Another Action',
          divider: true,
          url: '#2'
        },
        {
          label: 'Disabled Action',
          disabled: true,
          url: '#3'
        },
        {
          label: 'Yet Another Action',
          url: '#4'
        }
      ]
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  },
  created() {
    this.showCode('menu', 2);
  }
};
</script>
