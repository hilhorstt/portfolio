const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(ROOT_PATH, 'src/index'),
    ],
    output: {
        pathinfo: false,
    },
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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            optipng: {
                                optimizationLevel: 7,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Load a custom template
            inject: 'body', // Inject all scripts into the body
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'portfolio.css',
            allChunks: true,
        }),
    ],
};
