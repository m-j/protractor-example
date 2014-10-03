define(['lodash'], function (_) {
    var potionEditDirective = function () {
        return {
            templateUrl : '/views/potion/potion-creation-directive.html',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'E',
            transclude: false,
            scope : {
                potion : '=ngModel',
                ingredientsArray : '=ingredients'
            },
            controller: function($scope, $element, $attrs, $transclude){
                function putIngredientBack(ingredient){
                    $scope.ingredientsArray.forEach(function (item) {
                        if(item.id === ingredient.id){
                            item.quantity++
                        }
                    })
                }

                $scope.decreaseCount = function(ingredient){
                    ingredient.count--
                    putIngredientBack(ingredient)
                }

                $scope.removeIngredient = function(ingredient){
                    _.remove($scope.potion.ingredients, function(item){
                        return item.id === ingredient.id
                    })

                    putIngredientBack(ingredient)
                }
            }
        }
    }

    return potionEditDirective;
});