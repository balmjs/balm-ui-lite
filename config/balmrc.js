var balm = require('balm');
var path = require('path');
var env = require('./env');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR']
  },
  scripts: {
    entry: env.useDocs
      ? {
          a: ['core-js', 'classlist.js', 'matchmedia-polyfill', 'prismjs'],
          b: [
            'vue',
            'vue-router',
            'vue-meta',
            'vue-i18n',
            'axios',
            'material-design-lite'
          ],
          main: './docs/scripts/main.js'
        }
      : {
          'balm-ui-lite': './src/scripts/index.js'
        },
    library: 'BalmUILite',
    libraryTarget: 'umd',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          esModule: false
        }
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      }
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js'
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs ? [path.resolve('./src/scripts')] : []
  },
  extras: {
    excludes: ['index.js'],
    includes: ['CNAME', 'assets.zip']
  },
  zip: 'assets.zip',
  assets: {
    publicUrl: env.buildDocs ? 'http://mdl.balmjs.com/' : ''
  },
  useDefault: env.useDefault
};
