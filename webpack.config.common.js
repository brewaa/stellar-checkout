const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(mustache.html)$/,
        loader: 'mustache-loader?minify',
        options: {
          tiny: true
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
          // ,
          // options: {
          //   attrs: [':data-src']
          // }
        }
      },
      {
        test: /\.png$/, 
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: ''
    })
    // ,
    // new webpack.HashedModuleIdsPlugin()
    // ,
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    // })
  ],
  output: {
    filename: 'stellar-checkout.js', //.[chunkhash]
    path: path.resolve(__dirname, 'dist'),
    library: 'StellarCheckout',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
};