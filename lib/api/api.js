const axios = require('axios');

async function getUsersIDs(req, res) {
    const {data: ids} = await req.axios.get('users/ids');
    res.status(200).send(ids);
}

function apply(router, options) {
    router.get('/users/ids', getUsersIDs);
}

module.exports = apply;
