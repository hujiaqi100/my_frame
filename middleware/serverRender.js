
const path = require('path')
const fs = require('fs')
const defaultConfig = require('../config/default.config')
const { baseName } = defaultConfig
const serverRender = (req, res) => {
    const { outPutPath, outputFileSystem, componetsFilePath, cssFilePath } = req
    outputFileSystem.readdir(outPutPath, (err, data) => {
        if (err) {
            throw new Error(err).message
        }
        const scripts = data.map(val => {
            return `<script src=${baseName}/${val}></script>`
        })
        const { matchRouters, render } = require(componetsFilePath)
        const css = fs.readFileSync(cssFilePath, 'utf8')
        const dom = render(req.path)
        res.send(`
                    <!DOCTYPE html>
                        <html lang="en">
                        <style type="text/css">
                        ${css}
                        </style>
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Express and Webpack</title>
                        </head>
                        <body>
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