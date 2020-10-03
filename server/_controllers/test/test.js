const responseService = require('../../_utils/response');


module.exports = function (app, config) {


    // create new report
    app.get('/test',async function (req, res) {
console.log("heree")
        try {
            const data = ["1111","2222"]
            return res.status(responseService.status.OK).send(data);
        } catch (err) {
            //check if not errorMessage object
            if (!err.status)
                err = responseService.errorMessage(err);
            return res.status(err.status).send(err);
        }
    });

};
