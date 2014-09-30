define(function () {
    var IngredientsRepository = function (Restangular) {
        this.getAll = function(){
            return Restangular.all('ingredients').getList()
        }
    }

    return IngredientsRepository;
});