class HttpError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.code = statusCode;
        
    }

    toJSON() {
        const {code, message} = this;
        return {code, message};
    }
}

module.exports = HttpError;