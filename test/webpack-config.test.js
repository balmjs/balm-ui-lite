const nodeExternals = require('webpack-node-externals');

module.exports = {
  // mode: 'development',
  // Exclude NPM deps from test bundle
  externals: [nodeExternals()],
  // Use inline source map so that it works with mocha-webpack
  devtool: 'inline-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
};
