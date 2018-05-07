let webpack = require('webpack');

module.exports = {
  entry : "./index.js",
  output: {
    "filename" : "./src/bundle.js"
  },

  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}
