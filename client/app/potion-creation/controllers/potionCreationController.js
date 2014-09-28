define(function () {
    var PotionCreationController = function ($scope, $state) {

        $scope.addIngredient = function(ingredient){
            $scope.currentPotion.ingredients.push(ingredient)
        }

        $scope.availableIngredients = [
            {
                name: 'Eye of snake'
            },
            {
                name: 'Feather of owl'
            },
            {
                name: 'Zombie slime'
            },
            {
                name: 'Ghoul blood'
            }
        ]

        $scope.currentPotion = {
            ingredients : [
                {
                    name: 'Eye of snake'
                },
                {
                    name: 'Feather of owl'
                }
            ]
        }
    }

    return PotionCreationController;
});