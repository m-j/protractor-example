define(['angular'
        , 'ui-router'
        , 'restangular'
        , './potsRoutes'
        , './potion/directives/potsPotionEdit'
        , './potion/controllers/potsPotionCreationController'
        , './potion/repositories/potsIngredientsRepository'
        , './potion/controllers/potsSummaryController'
        , './potion/services/potsCartService'
        , './potion/directives/postPotionView'
        , './potion/controllers/potsPaymentController'
    ]
    ,function(
        angular
        , uiRouter
        , restangular
        , potsRoutes
        , potsPotionEdit
        , potsPotionCreationController
        , potsIngredientsRepository
        , potsSummaryController
        , potsCartService
        , postPotionView
        , potsPaymentController
        )
    {
        var potsModule = angular.module('pots', ['ui.router', 'restangular'])
            .config(potsRoutes)
            .config(function(RestangularProvider){
                RestangularProvider.setBaseUrl('/api')
            })
            .directive('potsPotionEdit', potsPotionEdit)
            .controller('potsPotionCreationController', potsPotionCreationController)
            .service('potsIngredientsRepository', potsIngredientsRepository)
            .controller('potsSummaryController', potsSummaryController)
            .service('potsCartService', potsCartService)
            .directive('potsPotionView', postPotionView)
            .controller('potsPaymentController', potsPaymentController)
})