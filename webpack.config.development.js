'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

if (process.env.NODE_ENV !== 'test') {
  config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  ].concat(config.entry);
}

config.devtool = 'cheap-module-eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

config.module.loaders = config.module.loaders.concat([
  { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
  { test: /\.json$/, loader: 'json' },
  { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
  { test: /\.css$/, loader: 'style!css?modules', include: /flexboxgrid/, }
]);

module.exports = config;
