define(function () {
    var PotsPaymentController = function ($scope, potsWizardStateService, $state) {
        $scope.pay = function(){
            potsWizardStateService.push($scope.payment)
            $state.transitionTo('order.finish')
        }
    }

    return PotsPaymentController;
});