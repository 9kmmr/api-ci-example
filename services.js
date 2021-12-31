const axios = require('axios');

const services = {
    lists: getLists
}

function getLists(req, res){
    const limit = req.params.limit | 50 ;
    const start = req.params.start | 1;
    
    axios.get(`https://api.coinmarketcap.com/data-api/v3/map/all?listing_status=active&exchangeAux=is_active,status&cryptoAux=is_active,status&start=${start}&limit=${limit}`)
    .then(response => response.data)
    .then(response => res.send(response))
    .catch(err => console.log(err));    
}

module.exports = services;