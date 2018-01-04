// webpack.config.js
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
  output: {

  },
  module:{
  	// rules: [{
   //    test: /\.vue$/,
   //    use: 'vue-loader'
   // }]
  }
}