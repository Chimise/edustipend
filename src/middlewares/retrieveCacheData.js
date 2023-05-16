const {generateCacheKey, selectQueryFields} = require('../utils/index');
const Cache = require('../services/Cache');

// Retrieve data from cache to improve app performance
const retrieveCacheData = (req, res, next) => {
    const query = selectQueryFields(req.query, ['start', 'limit']);
    // Get data from Cache
    const data = Cache.get(generateCacheKey(req, query));
    if(data) {
        return res.json(data);
    }
    next()
}

module.exports = retrieveCacheData;