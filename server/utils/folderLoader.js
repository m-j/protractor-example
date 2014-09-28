var fs = require('fs')
var path = require('path')

exports.load = function(dir){
    return fs.readdirSync(dir).map(function(file) {
        return require(path.join(dir, file))
    })
}