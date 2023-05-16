const axios = require('../utils/request');

class Post {
    static async find(params) {
        const response = await axios.get('/posts', {
            params: {
                _start: params.start,
                _limit: params.limit
            }
        })

        return response.data;
    }
}

module.exports = Post;