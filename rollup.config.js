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
            ],
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        json(),
        resolve({
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        commonjs(),
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'assets') },
            ]
        }),
    ],
    external: ['antd', 'react', 'react-dom/server', 'react-router-dom', 'react-router-config']
};
