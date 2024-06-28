const process = require('child_process')
const path = require('path')
class SsrBuildWebpackPlugin {
    constructor() {
    }
    apply(compiler) {
        compiler.hooks.afterEmit.tap('SsrBuildWebpackPlugin', (compilation) => {
            const path1 = path.resolve(__dirname, '../../server_render/app.cjs.js')
            process.execSync(`rm -rf ${path1}`)
        })
        compiler.hooks.done.tap('SsrBuildWebpackPlugin', (compilation) => {
            const cmd = 'npm run rollup'
            process.exec(cmd, function (err, stdout, stderr) {
                console.log('\n\n --- 正在构建ssr build --- \n');
                console.log('ssr build');
                // console.log("error" + err);
                console.log("stdout" + stdout);
                console.log("stderr" + stderr);
                console.log(' --- ssr 构建完成 --- ');
            })
        })
    }
}
module.exports = SsrBuildWebpackPlugin