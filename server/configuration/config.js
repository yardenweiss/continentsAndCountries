var env = process.env.NODE_ENV || 'development';
var path = require('path');

var rootPath = path.normalize(__dirname + '/..');

var config = {
    development: {
        root: rootPath,
            port: process.env.SERVER_PORT || "3000",
            requestTimeout: process.env.REQUEST_TIMEOUT || 20000
    }
};


module.exports = config[env];
