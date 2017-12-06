import './polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import BalmUI from '../../src/scripts/index'; // 'balm-ui-lite'
import App from './views/layouts/app';
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
Vue.use(VueMeta);
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
    thead: ['参数', '类型', '默认值', '说明'],
    tbody: ['name', 'type', 'default', {
      field: 'description',
      raw: true
    }]
  },
  slots: {
    thead: ['名称', '说明', '作用域'],
    tbody: ['name', 'description', 'props']
  },
  events: {
    thead: ['名称', '说明'],
    tbody: ['name', 'description']
  }
};
Vue.prototype.$domain = DEBUG ? '' : '/ui-vue-lite';

const router = new VueRouter({
  routes
});

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'cn', // set locale
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
