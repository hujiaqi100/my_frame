const express = require('express');
const webpack = require('webpack');
const defaultConfig = require('./config/default.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./builder/webpack.config.js');
const env = defaultConfig.env
const app = express();
const fs = require('fs')
const path = require('path')
const compiler = webpack(config(env));
const { serverRender } = require('./middleware/serverRender.js')
const history = require('connect-history-api-fallback');
const React = require('react');
global.React = React
app.use(defaultConfig.baseName, express.static('dist'))
if (env == 'development') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: defaultConfig.baseName
    }));
    if (defaultConfig.ssr) {
        app.use((req, res, next) => {
            req.outPutPath = compiler.outputPath
            req.outputFileSystem = compiler.outputFileSystem
            next()
        })
        app.use((req, res, next) => {
            let timer
            const componetsFilePath = path.resolve(__dirname, './server_render/app.cjs.js')
            const cssFilePath = path.resolve(__dirname, './server_render/app.css')
            req.componetsFilePath = componetsFilePath
            req.cssFilePath = cssFilePath
            timer = setInterval(() => {
                if (fs.existsSync(componetsFilePath) && fs.existsSync(cssFilePath)) {
                    clearInterval(timer)
                    timer = null
                    next()
                }
            }, 100)
        })
        app.use(serverRender)
    } else {
        app.use(webpackHotMiddleware(compiler));
        app.use(history({
            index: `${defaultConfig.baseName}/index.html`
        }));
    }

} else {
    app.get('*', (req, res) => {
        const htm = fs.readFileSync('./dist/index.html', 'utf8')
        res.send(htm)
    })
}

const PORT = defaultConfig.port || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}${defaultConfig.baseName}`);
});
