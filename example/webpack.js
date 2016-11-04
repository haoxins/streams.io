
'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: "index.js"
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'example.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  }
}
