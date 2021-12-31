const services = require('./services');

function routing(router){
    router.route('/lists')
        .get( services.lists)
}

module.exports.route = routing;