
module.exports = function (app) {

    app.get('*', function (req, res) { res.status(404).json({ error: 'Invalid GET request 11' }) });
    app.post('*', function (req, res) { res.status(404).json({ error: 'Invalid POST request' }) });
    app.delete('*', function (req, res) { res.status(404).json({ error: 'Invalid DELETE request' }) });
};
