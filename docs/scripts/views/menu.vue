<template>
  <div class="page--menu">
    <div class="component-title">
      <h3>Menu</h3>
      <p>Lists of clickable actions.</p>
    </div>

    <h4>{{ $t('menu.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button id="demo-menu-lower-left" icon="more_vert"></ui-button>
        <ui-menu btnId="demo-menu-lower-left" :menu="data" @selected="onMenu"></ui-menu>
      </div>
    </div>
    <!-- <ui-markdown :text="code[0]"></ui-markdown> -->

    <h4>{{ $t('menu.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-button id="demo-menu-lower-right" icon="settings"></ui-button>
        <ui-menu btnId="demo-menu-lower-right" :menu="data" @selected="onMenu">
          <ui-menuitem v-for="(item, index) in data" :key="index" :item="item">
            <a :href="item.url">{{ item.label }}</a>
          </ui-menuitem>
        </ui-menu>
      </div>
    </div>
    <!-- <ui-markdown :text="code[1]"></ui-markdown> -->

    <ui-apidoc name="menu"></ui-apidoc>
    <ui-apidoc name="menuitem"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      data: [{
        url:'/a',
        label: 'Item A'
      }, {
        url:'/b',
        label: 'Item B',
        disabled: true
      }, {
        url:'/c',
        label: 'Item C'
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
