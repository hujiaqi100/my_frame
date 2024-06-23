const path = require('path');
const rootPath = path.resolve(__dirname, '../')
const SsrBuildPlugin = require('./plugins/ssr-build-plugin')
module.exports = {
    entry:
    {
        app: [
            path.resolve(rootPath, 'assets/client.jsx')
        ]
    },
    mode: 'production',
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
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
                    babelrc: true,
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
    plugins: [
        new SsrBuildPlugin()
    ],
};
