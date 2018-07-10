import {
  isIE,
  killIE
} from './kill-ie';
import './polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
// import VueI18n from 'vue-i18n';
import axios from 'axios';
import BalmUI from '../../src/scripts/index'; // 'balm-ui-lite'
import App from './views/layouts/app';
import routes from './routes/index';
import UiMarkdown from './components/markdown';
import UiApidoc from './components/apidoc';
import UiAccordion from './components/accordion';
// syntax highlighting
import prismjs from 'prismjs';
// ready translated locales
import {
  flatpickrLang
} from './config/lang';

if (isIE) {
  killIE();
} else {
  const DEBUG = process.env.NODE_ENV !== 'production';

  Vue.config.productionTip = false;

  Vue.use(VueRouter);
  Vue.use(VueMeta);
  // Vue.use(VueI18n);
  Vue.use(BalmUI);

  Vue.component(UiMarkdown.name, UiMarkdown);
  Vue.component(UiApidoc.name, UiApidoc);
  Vue.component(UiAccordion.name, UiAccordion);

  Vue.prototype.$domain = DEBUG ? '' : '//mdl.balmjs.com';
  Vue.prototype.$http = axios;
  Vue.prototype.$prism = prismjs;
  Vue.prototype.$docs = {
    props: {
      thead: ['参数', '类型', '默认值', '说明'],
      tbody: [
        'name',
        'type',
        'default',
        {
          field: 'description',
          raw: true
        }
      ]
    },
    slots: {
      thead: ['名称', '说明', '作用域'],
      tbody: ['name', 'description', 'props']
    },
    events: {
      thead: ['名称', '类型', '说明'],
      tbody: ['name', 'type', 'description']
    },
    sass: {
      thead: ['可复写的Sass变量', '说明'],
      tbody: [
        'var',
        {
          field: 'description',
          raw: true
        }
      ]
    }
  };

  const router = new VueRouter({
    routes
  });

  // Create VueI18n instance with options
  // const i18n = new VueI18n({
  //   locale: 'cn', // set locale
  //   messages: locales // set locale messages
  // });
  Vue.prototype.flatpickrLang = flatpickrLang;

  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    },
    // i18n
  });
}
