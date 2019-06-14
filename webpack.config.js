const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    chat: ['babel-polyfill', './client/js/chat/chat.js'],
    index: './client/js/join/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'chat.html',
      template: 'client/html/chat.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: 'client/html/index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  }
}
