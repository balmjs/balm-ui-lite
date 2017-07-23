<template>
  <ui-layout
    class="container"
    fixedDrawer>
    <ui-layout-header>
      <ui-layout-header-row>
        <ui-layout-title>Welcome to BalmUI Lite</ui-layout-title>
        <ui-layout-spacer></ui-layout-spacer>
        <p class="supported-lang">
          <a :class="{'active': isActiveLang('cn') }" @click="switchLang('cn')">{{ lang.cn }}</a>
          |
          <a :class="{'active': isActiveLang('en') }" @click="switchLang('en')">{{ lang.en }}</a>
        </p>
      </ui-layout-header-row>
    </ui-layout-header>
    <ui-layout-drawer>
      <ui-layout-title class="clearfix">
        <ui-badge class="logo" value="beta">
          <router-link to="/">Balm UI Lite</router-link>
        </ui-badge>
        <a class="pull-right" href="https://github.com/balmjs/ui-vue-lite">
          <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </ui-layout-title>
      <ui-navigation v-for="(item, index) in menu" :key="index">
        <template scope="props">
          <h3>{{ $t(item.name) }}</h3>
          <template v-for="(component, index) in item.components">
            <a v-if="component.name === 'icon'" href="http://balmjs.com/ui-vue/#/icons" target="_blank">
              {{ $t(component.name) }}
            </a>
            <router-link v-else
              :key="index"
              :class="props.className"
              :to="component.url"
              active-class="active">
              <span>{{ $t(component.name) }}</span>
            </router-link>
          </template>
        </template>
      </ui-navigation>
    </ui-layout-drawer>
    <ui-layout-content>
      <router-view></router-view>
    </ui-layout-content>
  </ui-layout>
</template>

<script>
import {lang} from './config/lang';
import menu from './config/menu';

export default {
  data() {
    return {
      lang,
      menu
    };
  },
  watch: {
    $route() {
      this.$el.querySelector('.mdl-layout__content').scrollTop = 0;
    }
  },
  methods: {
    isActiveLang(lang) {
      return lang === this.$i18n.locale;
    },
    switchLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
