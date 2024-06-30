import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'
import path from 'path'
export default {
    input: path.resolve(__dirname, 'assets/server.js'),
    output: [
        {
            file: path.resolve(__dirname, 'server_render/app.cjs.js'),
            format: 'cjs'
        },
    ],
    plugins: [
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-transform-runtime',
                "@babel/plugin-transform-react-jsx",
            ],
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        json(),
        commonjs(),
        resolve({
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'assets') },
            ]
        }),
    ],
    external: ['antd', 'react', 'react-dom', 'react-router-dom', 'react-dom/server', 'react-router-dom/server']
};
