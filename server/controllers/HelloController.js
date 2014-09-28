function HelloController(){
    this.get('/api/hello', function(req, res){
        res.send('Hello World');
    });
}

module.exports = HelloController;