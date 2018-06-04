var balm = require('balm');
var path = require('path');
var env = require('./env');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

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
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
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
    include: env.useDocs ? [path.resolve('./src/scripts')] : [],
    extractAllVendors: env.useDocs
  },
  extras: {
    excludes: ['index.js'],
    includes: ['CNAME', 'assets.zip']
  },
  zip: 'assets.zip',
  assets: {
    publicUrl: env.buildDocs ? '//mdl.balmjs.com/' : ''
  },
  cache: env.buildDocs,
  useDefault: env.useDefault
};
