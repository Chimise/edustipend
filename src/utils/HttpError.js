class HttpError extends Error {
    constructor(message, statusCode = 500, originalError) {
        super(message);
        this.code = statusCode;
        this.original = originalError;
    }

    toJSON() {
        const {code, message, original} = this;
        const error = {code, message}

        return error;
    }
}

module.exports = HttpError;