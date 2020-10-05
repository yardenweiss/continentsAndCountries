const continentsCode = [{name:"Africa", code:"AF"}, {name:"Americas",code:"AM"}, {name:"Asia",code:"AS"}, {name:"Europe",code:"EU"}, {name:"Oceania",code:"OC"}];
const continentsRep = require('./continents.rep');
const cache = require('../../configuration/cache');

module.exports = function (app, config) {

    app.get('/continents/code', cache.cacheMiddleware(),async function (req, res) {
        try {
            return res.status(200).send(continentsCode);
        } catch (err) {
            return res.status(500).send(err);
        }
    });

    app.get('/continents/:continent', cache.cacheMiddleware() , async function (req, res)  {
        try {
            const data = await continentsRep.getCountries(req.params.continent);
            return res.status(200).send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    });

};
