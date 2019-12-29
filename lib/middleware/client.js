const axios = require('axios');

function clients({apiServer}) {
    return async (req, res, next) => {
        req.axios = axios.create({
            baseURL: apiServer
        });

        next();
    };
}

module.exports = clients;
