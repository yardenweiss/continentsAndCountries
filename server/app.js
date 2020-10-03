require('dotenv').config()
var express = require('express');
var config = require('./configuration/config');

var initializeControllers = require('./configuration/initControllers');

var app;
var server;
function initServer() {

    // create server object
    app = express();
    

    // initialize all requires inside controllers directory.
    initializeControllers.loadControllers(config, app);


    // initialize routes
    require('./configuration/routes')(app);

    // start server
    server = app.listen(config.port, function () {
        console.log('Server running on port:' + config.port.toString())
    });

}

function getServer() {
    return server;
}

initServer();

module.exports = {
    getServer
}

