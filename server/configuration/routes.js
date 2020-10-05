const cache = require('./cache')

module.exports = function (app) {
    app.get('*' , (req, res) => {console.log("gggggggg"); res.status(404).json({ error: 'Invalid GET request ' }) });  
};
