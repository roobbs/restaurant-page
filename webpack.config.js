const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'main.html',
        inject: 'head',
        scriptLoading: 'defer',
    })
  ],

};