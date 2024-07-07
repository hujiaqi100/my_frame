const axios = require('axios')
module.exports = async (promiseList) => {
    const list = []
    for (const i of promiseList) {
        const { name, url, params, data } = i
        const result = await axios(`http://localhost:3300${url}`, {
            method: 'GET',
            params,
            data
        });
        list.push({
            [name]: result.data
        })
    }
    return list
}