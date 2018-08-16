const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map'
})
