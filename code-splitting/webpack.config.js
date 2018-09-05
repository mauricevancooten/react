const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle-[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  }
}
