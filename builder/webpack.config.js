const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')
const path = require('path')
const webpackMerge = require('webpack-merge')
const defaultConfig = require('../config/default.config')
const SsrBuildPlugin = require('./plugins/ssr-build-plugin')
const rootPath = path.resolve(__dirname, '../assets')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    module: {

        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
            }
        ]
    }
};
module.exports = (env, args) => {
    if (defaultConfig.env == 'development') {
        if (defaultConfig.ssr) {
            commonConfig['plugins'] = [
                new SsrBuildPlugin()
            ]
            commonConfig['entry'] = {
                app: [
                    path.resolve(rootPath, 'client.jsx')
                ]
            }
        } else {
            commonConfig['entry'] = {
                app: [
                    'webpack-hot-middleware/client?reload=true',
                    path.resolve(rootPath, 'client.jsx')
                ]
            }
            commonConfig['plugins'] = [
                new webpack.HotModuleReplacementPlugin(),
                new HtmlWebpackPlugin({
                    template: path.resolve(rootPath, '../public/index.html'),
                    publicPath: defaultConfig.baseName
                }),
            ]
        }
        return webpackMerge(devConfig, commonConfig)
    } else {
        if (defaultConfig.ssr) {
            commonConfig['plugins'] = [
                new SsrBuildPlugin()
            ]
        } else {
            commonConfig['plugins'] = [
                new HtmlWebpackPlugin({
                    template: path.resolve(rootPath, '../public/index.html'),
                    publicPath: defaultConfig.baseName
                }),
            ]
        }
        commonConfig['entry'] = {
            app: [
                path.resolve(rootPath, 'client.jsx')
            ]
        }
        return webpackMerge(prodConfig, commonConfig)
    }
}