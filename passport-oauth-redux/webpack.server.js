const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    path: __dirname + '/',
    filename: 'server.js'
  },
  mode: 'production',
  target: 'node',
  externals: nodeExternals()
})
