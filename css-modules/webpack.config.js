const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './src/sass/styles.scss'],
  output: {
    path: __dirname + '/public/',
    filename: 'js/bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
      chunkFilename: 'css/[id].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              modules:true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'sass-loader'
        ],
      }
    ]
  }
}
