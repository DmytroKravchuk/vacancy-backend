const ApiError = require("../exceptions/api-error");

module.exports = function (err, req, res) {
    console.log(err);
    if(err instanceof ApiError) {
        const {status, message, errors} = err;
        return res.status(status).json({status, message, errors});
    }
    return res.status(500).json({message: "Server Error"})
}