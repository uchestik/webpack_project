var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// const VENDOR_LIBS = [
//   'faker', 'lodash', 'redux', 'react-redux',
//   'react-dom', 'react-input-range', 'redux-form',
//   'redux-thunk', 'react'
// ]

module.exports = {
  entry: { // by using an object we can specify multiple entry points. lets do some code splitting between our code and vendor code
    bundle: './src/index.js', //the key will be the name of the file. slightly different syntax
    // vendor: VENDOR_LIBS the use for this has been deprecated in webpack 4
  },
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' //name gets replaced with the key from the entry object
  },
  module:{
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ //we assume al the files in the node_modules is already in es5 format
      },
      {
        use: ['style-loader', 'css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins:[
    // new webpack.optimize.CommonsChunkPlugin({ //this tells webpack to look at all the files in the bundle.js and vendor.js. If any are duplicates then add them to the vendor bundle
    //   names: ['vendor', 'manifest']// however this has been deprecated in webpack 4
    // })
    new HtmlWebpackPlugin({ //we need to direct this plugin to use out existing index.html file as a template.
      template:'src/index.html'
    })
  ],
  optimization:{
    splitChunks:{ //this replaced CommonsChunkPlugin
      chunks: 'all',
      minSize:0
    }
  }
};
