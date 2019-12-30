<template>
  <ui-layout class="balm-ui-container" fixedDrawer>
    <ui-layout-header>
      <ui-layout-header-row>
        <ui-layout-title>Material Design Lite + Vue</ui-layout-title>
        <ui-layout-spacer></ui-layout-spacer>
        <!-- <p class="supported-lang">
          <a :class="{'active': isActiveLang('cn') }" @click="switchLang('cn')">{{ lang.cn }}</a>
          |
          <a :class="{'active': isActiveLang('en') }" @click="switchLang('en')">{{ lang.en }}</a>
        </p> -->
        <p class="welcome-issues">
          欢迎
          <a
            href="https://github.com/balmjs/balm-ui-lite/issues"
            target="_blank"
            rel="noopener"
            >ISSUE</a
          >
          @<strong>BalmUI Lite</strong>
        </p>
      </ui-layout-header-row>
    </ui-layout-header>
    <ui-layout-drawer>
      <ui-layout-title>
        <router-link to="/">BalmUI Lite</router-link>
        <a class="pull-right" href="https://github.com/balmjs/balm-ui-lite">
          <svg
            aria-hidden="true"
            class="octicon octicon-mark-github"
            height="28"
            version="1.1"
            viewBox="0 0 16 16"
            width="28"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </ui-layout-title>
      <ui-nav v-for="(item, index) in menu" :key="index">
        <template slot-scope="props">
          <h5>{{ T_CN.menu[item.name] }}</h5>
          <template v-for="(subitem, index) in item.subitems">
            <label v-if="subitem.label" :key="`label${index}`">{{
              subitem.name
            }}</label>
            <a
              v-else-if="subitem.name === 'icons'"
              :key="`a${index}`"
              href="https://material.balmjs.com/#/icons"
              target="_blank"
              rel="noopener"
              :class="props.className"
            >
              <span>{{ T_CN.menuitem[subitem.name] }}</span>
            </a>
            <router-link
              v-else
              :key="index"
              :class="props.className"
              :to="subitem.url"
              active-class="mdl-navigation__link--current"
            >
              <span>{{ T_CN.menuitem[subitem.name] }}</span>
            </router-link>
          </template>
        </template>
      </ui-nav>
    </ui-layout-drawer>
    <ui-layout-content>
      <transition name="loading">
        <div v-if="loading" class="loading-container">
          <ui-spinner active></ui-spinner>
        </div>
        <router-view v-else></router-view>
      </transition>
    </ui-layout-content>
  </ui-layout>
</template>

<script>
// import { lang } from '@/config/lang';
import menu from '@/config/menu';
import T_CN from '@/lang/cn';

export default {
  metaInfo: {
    title: 'BalmUI Lite'
  },
  data() {
    return {
      T_CN,
      loading: false,
      menu
    };
  },
  watch: {
    $route() {
      this.$el.querySelector('.mdl-layout__content').scrollTop = 0;
    }
  },
  // methods: {
  //   isActiveLang(lang) {
  //     return lang === this.$i18n.locale;
  //   },
  //   switchLang(lang) {
  //     this.$i18n.locale = lang;
  //   }
  // },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      next();
    });
    this.$router.afterEach(() => {
      this.loading = false;
    });
  }
};
</script>
