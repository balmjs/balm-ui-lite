import './polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import BalmUI from '../../src/scripts/index'; // 'balm-ui-lite'
import App from './app';
import routes from './routes/index';
import UiMarkdown from './components/markdown';
import UiApidoc from './components/apidoc';
// syntax highlighting
import 'prismCss';
import prismjs from 'prismjs';
// plugins
import 'flatpickrCss';
// ready translated locales
import { locales, flatpickrLang } from './config/lang';

const DEBUG = process.env.NODE_ENV !== 'production';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(BalmUI);
Vue.use(BalmUI.plugins.event);
Vue.use(BalmUI.plugins.alert);
Vue.use(BalmUI.plugins.confirm);
Vue.use(BalmUI.plugins.toast);
Vue.use(BalmUI.plugins.notify);
Vue.use({
  install(vue) {
    vue.component(UiMarkdown.name, UiMarkdown);
    vue.component(UiApidoc.name, UiApidoc);
  }
});
Vue.prototype.$http = axios;
Vue.prototype.$prism = prismjs;
Vue.prototype.$docs = {
  props: {
    thead: ['Name', 'Type', 'Default', 'Description'],
    tbody: ['name', 'type', 'default', {
      field: 'description',
      raw: true
    }]
  },
  slots: {
    thead: ['Name', 'Description', '<template scope="props">'],
    tbody: ['name', 'description', 'props']
  },
  events: {
    thead: ['Name', 'Description'],
    tbody: ['name', 'description']
  }
};
Vue.prototype.$domain = DEBUG ? '' : '/ui-vue-lite';

const router = new VueRouter({
  routes
});

router.afterEach((to, from) => {
  document.querySelector('title').innerHTML = to.meta.title;
});

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: locales, // set locale messages
});
Vue.prototype.flatpickrLang = flatpickrLang;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n
});
