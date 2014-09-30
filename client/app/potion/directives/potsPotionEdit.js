define(['lodash'], function (_) {
    var potionEditDirective = function () {
        return {
            templateUrl : '/views/potion/potion-creation-directive.html',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'E',
            transclude: false,
            scope : {
                potion : '=ngModel'
            },
            controller: function($scope, $element, $attrs, $transclude){
                $scope.decreaseCount = function(ingredeint){
                    ingredeint.count--
                }

                $scope.removeIngredient = function(ingredient){
                    _.remove($scope.potion.ingredients, function(item){
                        return item.id === ingredient.id
                    })
                }
            }
        }
    }

    return potionEditDirective;
});