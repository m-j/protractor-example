define(function(){
    return function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/create-potion")

        $stateProvider
            .state('create-potion', {
                url : '/create-potion',
                templateUrl : '/views/potion/create-potion.html',
                controller : 'potsPotionCreationController'
            })
            .state('order', {
                url : '/order',
                abstract : true
            })
            .state('order.summary', {
                url : '/summary',
                views : {
                    '@' : {
                        templateUrl: '/views/potion/potion-summary.html',
                        controller: 'potsSummaryController'
                    }
                }
            })
            .state('order.payment', {
                url : '/payment',
                views : {
                    '@' : {
                        templateUrl: '/views/potion/order-payment.html',
                        controller: 'potsPaymentController'
                    }
                }
            })
            .state('order.finish', {
                url : '/finish',
                views : {
                    '@' : {
                        templateUrl: '/views/potion/order-finish.html',
                        controller: 'potsOrderFinishController'
                    }
                }
            })
            .state('order.fail', {
                url : '/fail',
                views : {
                    '@' : {
                        templateUrl: '/views/potion/order-fail.html',
                        controller: function(){}
                    }
                }
            })
    }
})