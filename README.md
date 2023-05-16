## Simple Express Server

A simple express web server that retrieves dummy posts and comments data from JSON Placeholder API. It supports caching of data and retrying of failed request to improve performance.


## Routes
- **/api/comments**: Fetches dummy comment data from jsonplaceholder. It supports `start` and `limit` query to customize response.

- **/api/posts**: Fetches dummy post data from jsonplaceholder. Also supports the `start` and `limit` query.


## Setup / Installation
Follow the steps below to run the project locally:

1. Clone the repo
    ```git clone https://github.com/Chimise/simple-nodejs-server```

2. Install all dependencies
    ```npm install```

3. Start the Node.js server
    ```npm start```

4. Or start the development server to automatically restart server on code changes
    ```npm run dev```







