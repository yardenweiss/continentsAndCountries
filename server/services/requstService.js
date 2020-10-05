const axios = require("axios").default;

async function getData(url) {

    try {
        let res = await axios.get(url);
        return res.data;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getData
}