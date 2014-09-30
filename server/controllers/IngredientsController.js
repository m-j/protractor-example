var db = require('../db/db')

function IngredientsController(){
    this.get('/api/ingredients', function(req, res){
        res.send(db.ingredients)
    })
}

module.exports = IngredientsController