module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: __dirname + '/public/js/',
    filename: 'bundle.js'
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
  }
}
