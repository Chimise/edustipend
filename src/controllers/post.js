const {selectQueryFields, generateCacheKey} = require('../utils');
const Post = require('../services/Post');
const Cache = require('../services/Cache');
const HttpError = require('../utils/HttpError');


exports.getPosts = async (req, res, next) => {
    try {
        const query = selectQueryFields(req.query, ['start', 'limit']);
        
        const data = await Post.find(query);
        
        Cache.set(generateCacheKey(req, query), data);

        res.json(data);
    } catch (error) {   
        next(new HttpError('An error occurred, please try again', 500, error));
    }

}