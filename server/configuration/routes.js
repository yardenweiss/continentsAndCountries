
module.exports = function (app) {
    app.get('*' , (req, res) => {res.status(404).json({ error: 'Invalid GET request ' }) });  
};
