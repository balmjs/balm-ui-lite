var balm = require('balm');
var path = require('path');
var env = require('./env');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'Firefox ESR'
    ]
  },
  scripts: {
    entry: env.useDocs ? {
      a: [
        'core-js/shim',
        'classlist.js',
        'matchmedia-polyfill',
        'matchmedia-polyfill/matchMedia.addListener'
      ],
      b: [
        'vue',
        'vue-router',
        'vue-meta',
        'vue-i18n',
        'axios',
        'prismjs'
      ],
      main: './docs/scripts/main.js'
    } : {
      'balm-ui-lite': './src/scripts/index.js'
    },
    library: 'BalmUILite',
    libraryTarget: 'umd',
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
      options: {
        esModule: false
      }
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }],
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      prismCss: 'prismjs/themes/prism-okaidia.css',
      flatpickrCss: 'flatpickr/dist/flatpickr.min.css',
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js'
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs ? [
      path.resolve('./src/scripts')
    ] : []
  },
  extras: {
    excludes: ['index.js']
  },
  assets: {
    publicUrl: env.buildDocs ? 'http://balmjs.com/ui-vue-lite/' : ''
  },
  useDefault: env.useDefault
};
