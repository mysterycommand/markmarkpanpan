'use strict';

var webpack = require('webpack');
var config = require('./base');

config.devtool = 'source-map';
config.output.path = './gh-pages';
config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })
]);

module.exports = config;
