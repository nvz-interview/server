const express = require('express');

const Logger = require('./utils/logger');
const middleware = require('./middleware/');
const router = require('./api/');

const app = express();

const {PORT, CLIENT_DOMAIN, API_SERVER} = process.env;

app.use(middleware({clientDomain: CLIENT_DOMAIN, apiServer: API_SERVER}));
app.use(router);

app.listen(PORT, err => {
    if (!err) {
        Logger.info(`Listening on port ${PORT}`);
    } else {
        Logger.error(err);
    }
});
