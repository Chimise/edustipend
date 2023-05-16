const express = require('express');
const {getComments} = require('./controllers/comment');
const {getPosts} = require('./controllers/post');
const retrieveCacheData = require('./middlewares/retrieveCacheData');
const errorHandler = require('./controllers/errorHandler');
const matchAll = require('./controllers/matchAll');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/comments', retrieveCacheData, getComments);

app.get('/api/posts', retrieveCacheData, getPosts);

app.use('*', matchAll);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})




