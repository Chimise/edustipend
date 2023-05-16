const HttpError = require('../utils/HttpError');

const errorHandler = (error, req, res, next) => {
    const httpError  = error instanceof HttpError ? error : new HttpError('An error occured', 500, error);
    return res.status(httpError.code).json({
        error: httpError
    })
}

module.exports = errorHandler;