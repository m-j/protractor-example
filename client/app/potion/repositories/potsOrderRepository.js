define(function () {
    var PotsOrderRepository = function (Restangular) {
        this.place = function (order) {
            return Restangular.all('orders').post(order);
        }
    }

    return PotsOrderRepository;
});