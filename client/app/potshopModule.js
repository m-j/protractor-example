define(['angular'
        , 'ui-router'
        , './potshopRoutes'
        , './potion-creation/directives/potionPreview'
        , './potion-creation/controllers/potionCreationController'
    ]
    ,function(
        angular
        , uiRouter
        , potshopRoutes
        , potionPreview
        , potionCreationController
        )
    {
        var potshopModule = angular.module('potshop', ['ui.router'])
            .config(potshopRoutes)
            .directive('potionPreview', potionPreview)
            .controller('potionCreationController', potionCreationController)
})