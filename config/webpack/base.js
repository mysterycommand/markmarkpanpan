'use strict';

var NODE_ENV = JSON.stringify(process.env.NODE_ENV) || '"development"';
var webpack = require('webpack');

module.exports = {
    entry: {
        'main': './source/main.js'
    },

    resolve: {
        extensions: ['', '.js']
    },

    output: {
        filename: '[name].js',
        publicPath: ''
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: NODE_ENV
                }
            }
        })
    ]
};
