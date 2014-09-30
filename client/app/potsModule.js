define(['angular'
        , 'ui-router'
        , 'restangular'
        , './potsRoutes'
        , './potion-creation/directives/potsPotionPreview'
        , './potion-creation/controllers/potsPotionCreationController'
        , './potion-creation/repositories/potsIngredientsRepository'
    ]
    ,function(
        angular
        , uiRouter
        , restangular
        , potsRoutes
        , potsPotionPreview
        , potsPotionCreationController
        , potsIngredientsRepository
        )
    {
        var potsModule = angular.module('pots', ['ui.router', 'restangular'])
            .config(potsRoutes)
            .config(function(RestangularProvider){
                RestangularProvider.setBaseUrl('/api')
            })
            .directive('potsPotionPreview', potsPotionPreview)
            .controller('potsPotionCreationController', potsPotionCreationController)
            .service('potsIngredientsRepository', potsIngredientsRepository)
})