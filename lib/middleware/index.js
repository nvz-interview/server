const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

const cors = require('./cors');
const client = require('./client');

function middleware(options) {
    const {clientDomain, ...rest} = options;

    return [
        cors(clientDomain),
        client(rest),
        morgan('dev'),
        compression(),
        bodyParser.json({limit: '100mb'})
    ];
}

module.exports = middleware;
