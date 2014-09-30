define(function () {
    var potsPotionView = function () {
        return {
            templateUrl : '/views/potion/potion-view-directive.html',
            link: function postLink(scope, iElement, iAttrs) {

            },
            restrict : 'E',
            transclude: false,
            scope : {
                potion : '=ngModel'
            },
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    return potsPotionView;
});