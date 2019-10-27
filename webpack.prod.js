const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_PATH = path.resolve(__dirname);

module.exports = merge(common, {
    mode: 'production',
    entry: [
        'babel-polyfill',
        path.resolve(ROOT_PATH, 'src/index'),
    ],
});
