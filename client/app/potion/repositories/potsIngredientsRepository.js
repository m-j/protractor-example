define(function () {
    var IngredientsRepository = function (Restangular) {
        this.getAll = function(){
            return Restangular.all('ingredients').getList().then(function(item){
                return item.plain()
            })
        }
    }

    return IngredientsRepository;
});