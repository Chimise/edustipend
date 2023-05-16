const Comment = require("../services/Comment");
const Cache = require("../services/Cache");
const { selectQueryFields, generateCacheKey } = require("../utils");
const HttpError = require('../utils/HttpError');

exports.getComments = async (req, res, next) => {
  try {
    const query = selectQueryFields(req.query, ["start", "limit"]);

    const data = await Comment.find(query);

    // Cache the response data
    Cache.set(generateCacheKey(req, query), data);

    res.json(data);
  } catch (error) {

    return next(new HttpError('An error occured, try again', 500, error));
  }
};
