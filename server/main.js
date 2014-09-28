var express = require('express');
var path = require('path')
var folderLoader = require('./utils/folderLoader')

var serveStatic = require('serve-static')
var app = express();

app.use(serveStatic('client'));

var controllers = folderLoader.load(path.join(__dirname, 'controllers'))

controllers.forEach(function(controller){
    controller.apply(app)
})

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

