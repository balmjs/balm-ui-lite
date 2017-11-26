var balm = require('balm');
var path = require('path');

var useDefault = !process.argv.includes('--mdl');
var buildDocs = process.argv.includes('--docs');
var useDocs = !balm.config.production || buildDocs;

balm.config = {
  roots: {
    source: useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: [
      '> 1%',
      'last 2 versions',
      'not ie <= 8'
    ]
  },
  scripts: {
    entry: useDocs ? {
      mylib: [
        'vue',
        'vue-router',
        'axios',
        'vue-i18n'
      ],
      main: './docs/scripts/main.js'
    } : {
      'balm-ui-lite': './src/scripts/index.js'
    },
    library: 'BalmUI',
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
    include: useDocs ? [
      path.resolve('./src/scripts')
    ] : []
  },
  extras: {
    excludes: ['index.js']
  },
  assets: {
    publicUrl: buildDocs ? 'http://balmjs.com/ui-vue-lite/' : ''
  },
  useDefault: useDefault
};

var DMI_SOURCE = './node_modules/material-design-icons';
var DML_SOURCE = './node_modules/material-design-lite';
var DEV_SOURCE = {
  mdl: './src/material-design-lite',
  img: './src/images',
  font: './src/fonts'
};

balm.go(function(mix) {
  if (buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
  } else {
    if (useDefault) {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');
      }
    } else {
      // clear
      mix.remove([DEV_SOURCE.mdl + '/*', DEV_SOURCE.img + '/*', DEV_SOURCE.font + '/*']);
      // get material design lite
      mix.copy(DML_SOURCE + '/src/{_*scss,material-design-lite.scss,mdlComponentHandler.js}', DEV_SOURCE.mdl);
      mix.copy(DML_SOURCE + '/src/**/{_*.scss,*.js}', DEV_SOURCE.mdl);
      // get material design lite images
      mix.copy(DML_SOURCE + '/src/images/*.svg', DEV_SOURCE.img);
      // get material design icons
      mix.copy(DMI_SOURCE + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
    }
  }
});
