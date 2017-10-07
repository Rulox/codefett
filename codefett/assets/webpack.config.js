const ExtractTextPlugin = require('extract-text-webpack-plugin');
      // HtmlWebpackPlugin = require('html-webpack-plugin');

const path              = require('path'),
      webpack           = require('webpack'),
      nodeExternals     = require('webpack-node-externals');

// Plugins
const extractSass = new ExtractTextPlugin({
  filename: "app.css",
  allChunks: true,
});

// Rules
const jsRules  = 
{ test: /\.js$/, 
  exclude: /node_modules/, 
  use: 'babel-loader'
};
const cssRules = 
{ test: /\.scss$/, 
  use: extractSass.extract({
    use: [
      "css-loader", 
      "postcss-loader",
      "sass-loader"
    ],
  })
};

module.exports = {
  entry: './app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
  },
  // devtool: 'source-map',
  module: {
    rules: [
      jsRules,
      cssRules,
    ]
  },
  plugins: [

  ]
}