define(function () {
    var potionPreviewDirective = function () {
        return {
            templateUrl : '/views/potion-creation/potion-creation-directive.html',
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

    return potionPreviewDirective;
});