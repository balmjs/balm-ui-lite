const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  useDefaults: env.useDefaults,
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    extractAllVendors: env.useDocs,
    entry: env.useDocs
      ? {
          main: './docs/scripts/main.js'
        }
      : {
          'balm-ui-lite': './src/scripts/index.js'
        },
    library: env.useDocs ? '' : 'BalmUILite',
    libraryTarget: env.useDocs ? 'var' : 'umd',
    includeJsResource: env.useDocs ? [path.resolve('./src/scripts')] : [],
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
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js',
      '@': path.resolve(__dirname, '../docs/scripts')
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    }
  },
  extras: {
    excludes: ['index.js'],
    includes: ['CNAME', 'assets.zip']
  },
  zip: 'assets.zip',
  assets: {
    publicUrl: env.buildDocs ? '//mdl.balmjs.com/' : '',
    cache: env.buildDocs
  },
  logs: {
    level: 2
  }
};
