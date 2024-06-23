const assetsConfig = require('../assets/config/default.config')
const _ = require('lodash')
const config = {
    port: 3300,
    env: 'development',
}
module.exports = _.merge(config, assetsConfig)