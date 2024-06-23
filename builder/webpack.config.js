const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')
const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/dqp/xx'
    },
};

module.exports = (env, args) => {
    if (args?.mode == 'production' || env == 'production') {
        return webpackMerge(commonConfig, prodConfig)
    } else {
        return webpackMerge(commonConfig, devConfig)
    }
}