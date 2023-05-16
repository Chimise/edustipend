const axios = require('axios');
const axiosRetry = require('axios-retry');

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosRetry(request, {
    retries: 3,
})

export default request;