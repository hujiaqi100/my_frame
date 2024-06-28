const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')
const path = require('path')
const webpackMerge = require('webpack-merge')
const defaultConfig = require('../config/default.config')
const SsrBuildPlugin = require('./plugins/ssr-build-plugin')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
};
module.exports = (env, args) => {
    if (defaultConfig.ssr) {
        commonConfig['plugins'] = [
            new SsrBuildPlugin()
        ]
    } else {
        commonConfig['plugins'] = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(rootPath, '../public/index.html'),
                publicPath: defaultConfig.baseName
            }),
        ]
    }

    if (defaultConfig.env == 'production' || args?.mode == 'production') {
        return webpackMerge(commonConfig, prodConfig)
    } else {
        return webpackMerge(commonConfig, devConfig)
    }
}