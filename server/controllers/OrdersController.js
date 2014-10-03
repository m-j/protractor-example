var db = require('../db/db')

function OrdersController(){
    function getOrderIngredientCounts(order) {
        var orderIngredientCounts = order.items.reduce(function (accumulator, potion) {
            potion.ingredients.forEach(function (ingredient) {
                accumulator[ingredient.id] = accumulator[ingredient.id] ? accumulator[ingredient.id] + ingredient.count : ingredient.count
            })

            return accumulator
        }, {})
        return orderIngredientCounts;
    }

    function isOrderValid(orderIngredientCounts){
        var orderValid = true

        db.ingredients.forEach(function(ingredient){
            orderValid &= ingredient.quantity >= (orderIngredientCounts[ingredient.id] ? orderIngredientCounts[ingredient.id] : 0)
        })

        return orderValid
    }

    function decreaseStockCounts(orderIngredientCounts){
        db.ingredients.forEach(function(ingredient){
            ingredient.quantity -= orderIngredientCounts[ingredient.id] ? orderIngredientCounts[ingredient.id] : 0
        })
    }

    this.post('/api/orders', function(req, res){
        console.log('proceeding order')
        console.log('%j',req.body)
        setTimeout(function(){
            var orderIngredientCounts = getOrderIngredientCounts(req.body);
            if(isOrderValid(orderIngredientCounts)){
                decreaseStockCounts(orderIngredientCounts)
                res.send({result: 'ok'})
            }
            else {
                res.status(400).send({result: 'Order contains more ingredients than are available in stock'})
            }
        },500)
    })
}

module.exports = OrdersController