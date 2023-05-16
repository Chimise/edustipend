const axios = require('axios');
const axiosRetry = require('axios-retry');

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

// Retry request on failure
axiosRetry(request, {
    retries: 3,
})

module.exports = request;