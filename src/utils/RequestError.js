class RequestError extends Error {
    constructor(message, statusCode = 500, payload) {
        super(message);
        this.code = statusCode;
        this.payload = payload;
    }

    toJSON() {
        const {code, message, payload} = this;
        return {code, message, payload};
    }
}

module.exports = RequestError;