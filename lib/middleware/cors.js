function cors(allowedOrigin) {
    return (req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
        res.header('Access-Control-Allow-Origin', allowedOrigin);
        res.header(
            'Access-Control-Allow-Headers',
            'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        );
        next();
    };
}

module.exports = cors;
