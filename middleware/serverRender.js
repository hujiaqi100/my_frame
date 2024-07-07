
const fs = require('fs')
const { createCache, extractStyle } = require('@ant-design/cssinjs')
const defaultConfig = require('../config/default.config')
const rcPromise = require('./rc_promise')
const { baseName } = defaultConfig
const serverRender = (req, res) => {
    const { outPutPath, outputFileSystem, componetsFilePath, cssFilePath } = req
    outputFileSystem.readdir(outPutPath, async (err, data) => {
        if (err) {
            throw new Error(err).message
        }
        const scripts = data.map(val => {
            return `<script src=${baseName}/${val}></script>`
        })
        delete require.cache[require.resolve(componetsFilePath)];
        delete require.cache[require.resolve(cssFilePath)];
        const { matchRouters, render } = require(componetsFilePath)
        const css = fs.readFileSync(cssFilePath, 'utf8')
        const mr = matchRouters(req.path)
        let promiseList = []
        if (mr) {
            mr.forEach(val => {
                if (val.route.loadData) {
                    const lodaData = val.route.loadData
                    promiseList = lodaData()
                }
            })
        }
        const pl = await rcPromise(promiseList)
        const context = { pl }
        context['data'] = 'data'
        const cache = createCache();
        const dom = render(req.path, context, cache)
        const styleText = extractStyle(cache);
        res.send(`
                    <!DOCTYPE html>
                        <html lang="en">
                          ${styleText}

                        <style type="text/css">
                          ${css}
                        </style>
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Express and Webpack</title>
                        </head>
                        <body>
                            <script>
                                window.__data__ = ${JSON.stringify(context)}
                            </script>
                            <div id='app'>
                            ${dom}
                            </div>
                            ${scripts.join(' ')}
                            
                            </body>
                        </html>
                    `)
    })
}
module.exports = {
    serverRender
}