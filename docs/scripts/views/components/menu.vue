<template>
  <div class="page--menu">
    <div class="component-title">
      <h3>Menu 下拉菜单</h3>
      <p>向下弹出的列表。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 默认下拉菜单</h4>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button id="demo-menu-1" icon="more_vert"></ui-button>
        <ui-menu dropdownId="demo-menu-1" :menu="data" @selected="onMenu"></ui-menu>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. 自定义下拉菜单</h4>

    <div class="snippet-group">
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
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc>
    <ui-markdown :text="menuDocs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import menuDocs from '../../apidocs/menu.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - 下拉菜单 <ui-menu>'
  },
  data() {
    return {
      menuDocs,
      data: [{
        label: 'Some Action',
        url: '#1'
      }, {
        label: 'Another Action',
        divider: true,
        url: '#2'
      }, {
        label: 'Disabled Action',
        disabled: true,
        url: '#3'
      }, {
        label: 'Yet Another Action',
        url: '#4'
      }]
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
