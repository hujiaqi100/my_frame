const path = require('path');
const rootPath = path.resolve(__dirname, '../assets')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const defaultConfig = require('../config/default.config')
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    optimization: {
        usedExports: true,
        // minimize: true,
        // minimizer: [new TerserWebpackPlugin()],
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 20000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                    priority: 10,
                },
                reactdom: {
                    test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
                    name: 'reactdom',
                    chunks: 'all',
                    priority: 20,
                },
                antd: {
                    test: /[\\/]node_modules[\\/]antd[\\/]/,
                    name: 'antd',
                    chunks: 'all',
                    priority: 30,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [
                        "@babel/preset-react",
                        "@babel/preset-env"
                    ],
                    plugins: [
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-syntax-jsx",
                        "@babel/plugin-syntax-dynamic-import",
                        [
                            "@babel/plugin-transform-react-jsx",
                            {
                                "runtime": "automatic"
                            }
                        ]
                    ]
                }
            },
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(rootPath, '/assets')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
};
