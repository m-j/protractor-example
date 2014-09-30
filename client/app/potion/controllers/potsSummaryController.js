define(['amplify-store'], function () {
    var PotsSummaryController = function ($scope, potsCartService, $state) {
        $scope.items = potsCartService.getAll()

        $scope.next = function(){
            $state.transitionTo('order.payment')
        }
    }

    return PotsSummaryController;
});