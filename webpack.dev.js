const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(ROOT_PATH, 'src/index'),
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Load a custom template
            inject: 'body', // Inject all scripts into the body
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
