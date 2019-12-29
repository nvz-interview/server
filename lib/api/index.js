const express = require('express');

const applyAPIRoutes = require('./api');

const router = express.Router({mergeParams: true});

applyAPIRoutes(router);

module.exports = router;
