const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');
const constants = require('./config/constants');
const individual = require('./config/individual');

balm.config = balmConfig;

balm.go(mix => {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.remove('./dist/rev-manifest.json');
  } else {
    if (env.updateMDL) {
      // clear
      mix.remove([
        constants.DEV_SOURCE.mdl + '/*',
        constants.DEV_SOURCE.img + '/*',
        constants.DEV_SOURCE.font + '/*'
      ]);

      // get material design lite
      mix.copy(
        constants.DML_SOURCE +
          '/src/{_*scss,material-design-lite.scss,mdlComponentHandler.js}',
        constants.DEV_SOURCE.mdl
      );
      mix.copy(
        constants.DML_SOURCE + '/src/**/{_*.scss,*.js}',
        constants.DEV_SOURCE.mdl
      );

      // get material design lite images
      mix.copy(
        constants.DML_SOURCE + '/src/images/*.svg',
        constants.DEV_SOURCE.img
      );

      // get material design icons
      mix.copy(
        constants.DMI_SOURCE + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}',
        constants.DEV_SOURCE.font
      );
    } else {
      if (balm.config.isProd) {
        mix.remove('./dist/font/*.css');

        // clear individual
        mix.remove([
          individual.output.components,
          individual.output.helpers,
          individual.output.plugins,
          individual.output.directives
        ]);

        // build individual
        const individualBuild = ['components', 'helpers', 'plugins']; // , 'directives'
        individualBuild.forEach(buildName => {
          // let buildFiles = individual[buildName].map(item => {
          //   return individual.input[buildName] + '/' + item;
          // });
          // mix.js(buildFiles, individual.output[buildName]);
          individual[buildName].forEach(async item => {
            await mix.js(
              [`${individual.input[buildName]}/${item}`],
              individual.output[buildName],
              {
                output: {
                  library: 'BalmUILite_' + item.split('.')[0]
                }
              }
            );
          });
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/font/*', './font');
        mix.copy('./dist/img/*', './img');
        mix.remove(['./dist/css', './dist/js', './dist/img', './dist/font']);
      }
    }
  }
});
