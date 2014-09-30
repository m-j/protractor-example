define(function () {
    var PotionCreationController = function ($scope, potsIngredientsRepository) {

        $scope.addIngredient = function(ingredient){
            var matchingIngredient = $scope.currentPotion.ingredients.filter(function(item){
                return item.id === ingredient.id;
            })[0]

            if(matchingIngredient){
                matchingIngredient.count ++
            }
            else {
                ingredient.count = 1
                $scope.currentPotion.ingredients.push(ingredient)
            }
        }

        potsIngredientsRepository.getAll().then(function(ingredients){
            $scope.availableIngredients = ingredients
        })

        $scope.currentPotion = {
            ingredients : []
        }
    }

    return PotionCreationController;
});