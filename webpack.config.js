/*
 ./webpack.config.js
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/, // look for .js files
        exclude: /node_modules/, // ignore /node_modules
        loader: 'babel-loader', // preprocess with that babel goodness
        query: {
          presets: ['react']
        }
      },
    ]
  },
  // add this line
  plugins: [HtmlWebpackPluginConfig],
  watch: true,
}
