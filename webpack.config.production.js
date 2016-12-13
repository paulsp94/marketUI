'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

var SaveAssetsJson = require('assets-webpack-plugin');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: './client/dist',
  pathInfo: true,
  publicPath: '/client/dist/',
  filename: 'bundle.[hash].min.js'
};

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new SaveAssetsJson({
    path: process.cwd(),
    filename: 'assets.json'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  function(compiler) {
    this.plugin('done', function(stats) {
      let main = stats.toJson().assetsByChunkName.main
      if (require('lodash').isArray(main)) {
        main = main[0]
      }

      const fs = require('fs')
      const file = 'client/dist/client-script.php'
      fs.access(file, fs.F_OK, err => {
        if (!err) return
        var fd = fs.openSync(file, 'wx');
        var buffer = new Buffer(`<?php $client_script = '${main}';`);
        fs.writeSync(fd, buffer, 0, buffer.length);
        fs.close(fd);
      })
    });
  }
]);

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [ 'react-hot', 'babel'], exclude: /node_modules/},
  { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
  {test: /\.json$/, loader: 'json'}
]);

module.exports = config;
