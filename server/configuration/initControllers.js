var fs = require('fs');
var path = require('path');
const extensions = { JAVASCRIPT: ".js", JAVASCRIPT_TEST: ".spec.js",JAVASCRIPT_REPOSITORY: ".rep.js",JAVASCRIPT_JSON: ".json"  }
let app;
let config;

module.exports = {
    loadControllers
}


// call to load controllers recursive function with controllers directory.
function loadControllers(_config, _app) {
    app = _app;
    config = _config;
    loadControllersDeep(path.join(config.root, '_controllers'))
}

// recursive function - set the requires that the application need & give the controllers the local variables.
function loadControllersDeep(itemPath) {
    try {
        fs.readdirSync(itemPath).forEach(function (item) {

            var fullPath = path.join(itemPath , item);

            if (isDirectory(fullPath)) {
                loadControllersDeep(fullPath)
            }

            else if (isJSFile(item)) {

                try { require(fullPath)(app, config); } catch (error) { console.log("resuire error",error) }
            }
        });
    } catch (error) { console.log("error", error) }
}

function isDirectory(itemPath) {
    try {
        return fs.statSync(itemPath).isDirectory() == true
    } catch (error) {
        console.log("isDirectory error", error)
        return false
    }
}

function isJSFile(name) {
    return ((name.indexOf(extensions.JAVASCRIPT) > 0) && (name.indexOf(extensions.JAVASCRIPT_TEST) == -1) && (name.indexOf(extensions.JAVASCRIPT_REPOSITORY) == -1) && (name.indexOf(extensions.JAVASCRIPT_JSON) == -1));
}