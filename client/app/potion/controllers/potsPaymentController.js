define(function () {
    var PotsPaymentController = function ($scope, potsCartService, potsOrderRepository, $state) {
        $scope.pay = function(){
            var items = potsCartService.getAll()

            var order = {
                payment : $scope.payment,
                items : items
            }

            potsOrderRepository.place(order).then(function(result){
                potsCartService.clear()
                $state.transitionTo('order.finish')
            },function(error){
                potsCartService.clear()
                $state.transitionTo('order.fail')
            })
        }
    }

    return PotsPaymentController;
});