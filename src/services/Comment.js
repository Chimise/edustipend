const axios = require('../utils/request');

class Comment {
    static async find(params) {
        // Get comments from JSON Placeholder, pass _limit and _start options to customize response
        const response = await axios.get('/comments', {
            params: {
                _start: params.start,
                _limit: params.limit
            }
        })

        return response.data;
    }   
}

module.exports = Comment;