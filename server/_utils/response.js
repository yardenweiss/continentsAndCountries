const status = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    NOT_ALLOWED: 405,
    ITERNAL_ERROR: 500
}



//build error message
function errorMessage(err = null, message = "server.errors.regularError", data = null, status = 500) {
    var errObj = err;
    try {
        if (err != null) {
            logger.error(err);
            errObj = err.toString();
        }
    } catch (error) {
        errObj = err;
    }

    return {
        type: "error",
        status: status,
        message: message,
        error: errObj,
        data: data
    }
}
//build succses message
function successMessage(message, data = null, status = 200) {
    return {
        type: "success",
        status: status,
        message: message,
        data: data
    }
}

module.exports = {
    errorMessage,
    successMessage,
    status,
    isError
}

function isError(data) {
    if (data.status != undefined && data.status === responseService.status.ITERNAL_ERROR) {
        return true;
    }
    return false;
}