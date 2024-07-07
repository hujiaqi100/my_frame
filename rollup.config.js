import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'
import postcss from "rollup-plugin-postcss";
import path from 'path'
import typescript from '@rollup/plugin-typescript';

export default {
    input: path.resolve(__dirname, 'assets/server.js'),
    output: [
        {
            file: path.resolve(__dirname, 'server_render/app.cjs.js'),
            format: 'cjs',
        },
    ],
    plugins: [
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            presets: [
                ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
                "@babel/preset-react"
            ],
            plugins: [
                ["@babel/plugin-transform-runtime", { regenerator: true }],
                "@babel/plugin-transform-react-jsx",
            ],
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        json(),
        typescript({ tsconfig: './tsconfig.json' }),
        commonjs(),
        postcss({
            extract: path.resolve(__dirname, 'server_render/app.css'),
            minimize: true,
            use: {
                less: true,
            },
            config: {
                path: './postcss.config.js'
            },
            extensions: ['.css', '.less'],
        }),
        resolve({
            extensions: [".js", ".jsx", ".tsx", ".ts"],
        }),
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'assets') },
            ]
        }),
    ],
    external: [
        'antd',
        'react',
        'react-dom',
        'react-router-dom',
        'react-dom/server',
        'react-router-dom/server',
        'maplibre-gl',
        'echarts',
        '@ant-design/cssinjs',
        // 'h_qca',
        'axios',
        'lodash',
        '@ant-design/icons'
    ]
};
