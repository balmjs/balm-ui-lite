module.exports = function(api) {
  let envOptions = api.env('production')
    ? {
        modules: false,
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true }
      }
    : {
        modules: false
      };
  let runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [['@babel/plugin-transform-runtime', runtimeOptions]],
    env: {
      test: {
        presets: ['@babel/preset-env']
      }
    }
  };
};
