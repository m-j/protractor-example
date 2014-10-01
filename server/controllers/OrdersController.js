function OrdersController(){
    this.post('/api/orders', function(req, res){
        console.log('proceeding order')
        console.log('%j',req.body)
        setTimeout(function(){
            res.send({result: 'ok'})
        },500)
    })
}

module.exports = OrdersController