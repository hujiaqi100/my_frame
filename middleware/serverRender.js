
const path = require('path')
const componetsFilePath = path.resolve(__dirname, '../server_render/app.cjs.js')
const serverRender = (req, res, next) => {
    if (process.env.enviroment == 'development') {
        next()
        return
    }
    const { matchRouters, render } = require(componetsFilePath)
    const currentRouter = matchRouters(req.path)
    const dom = render(req.path)
    res.send(`
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Express and Webpack</title>
                    </head>
                    <body>
                        <div id='app'>
                        ${dom}
                        </div>
                        <script src="app.js"></script>
                        <script src="vendors.js"></script>
                        <script src="react.js"></script>
                        <script src="reactdom.js"></script>
        
                    </body>
                    </html>
                `)

}
module.exports = {
    serverRender
}