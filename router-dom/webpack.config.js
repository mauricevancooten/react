module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
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
