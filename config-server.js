'use strict';

var path = require('path');

var publicPath = path.resolve('./build');

module.exports = {
    devServer: {
        contentBase: publicPath,
        https: false,
        host: '0.0.0.0',
        port: 9020
    }
};
