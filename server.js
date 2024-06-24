const express = require('express');
const webpack = require('webpack');
const defaultConfig = require('./config/default.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./builder/webpack.config.js');
const env = defaultConfig.env
const app = express();
const fs = require('fs')
const compiler = webpack(config(env));
const { serverRender } = require('./middleware/serverRender.js')
const history = require('connect-history-api-fallback');
app.use(defaultConfig.baseName, express.static('dist'))
if (env == 'development') {
    app.use(history({
        index: `${defaultConfig.baseName}/index.html`
    }));
    app.use(webpackDevMiddleware(compiler, {
        publicPath: defaultConfig.baseName
    }));
    app.use(webpackHotMiddleware(compiler));
    // app.use(serverRender)

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
