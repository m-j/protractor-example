define(['lodash'],function (_) {
    var PotionCreationController = function ($scope, potsIngredientsRepository, $state, potsCartService) {

        $scope.addIngredient = function(ingredient){
            if(ingredient.quantity < 1){
                return
            }

            var matchingIngredient = $scope.currentPotion.ingredients.filter(function(item){
                return item.id === ingredient.id;
            })[0]

            if(matchingIngredient){
                matchingIngredient.count ++
            }
            else {
                var clonedIngredient = _.cloneDeep(ingredient)
                clonedIngredient.count = 1
                $scope.currentPotion.ingredients.push(clonedIngredient)
            }

            ingredient.quantity --
        }

        potsIngredientsRepository.getAll().then(function(ingredients){
            $scope.availableIngredients = ingredients
        })

        $scope.currentPotion = {
            ingredients : []
        }

        $scope.buy = function(){
            potsCartService.add($scope.currentPotion);
            $state.transitionTo('order.summary')
        }
    }

    return PotionCreationController;
});