var env = process.env.NODE_ENV || 'development';
var path = require('path');

var rootPath = path.normalize(__dirname + '/..');

var config = {
    development: {
        root: rootPath,
            port: "3001",
            requestTimeout: process.env.REQUEST_TIMEOUT || 20000
    }
};


module.exports = config[env];
