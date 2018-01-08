var nodeExternals = require('webpack-node-externals');

module.exports = {
  // target: 'node', // webpack should emit node.js compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder from bundling
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  }
};
