const proxy = (req, res, next) => {
    next()
}
module.exports = { proxy }