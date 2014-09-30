var dbUtils = require('./dbUtils')
var addIds = dbUtils.addIds

var db = {
    ingredients : addIds(require('./ingredients'))
}

module.exports = db