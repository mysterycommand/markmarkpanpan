'use strict';

var config = require('./base');

config.devServer = {
    contentBase: './source',
    stats: {
        colors: true
    }
};
config.devtool = 'eval-source-map';

module.exports = config;
