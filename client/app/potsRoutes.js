define(function(){
    return function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/create-potion")

        $stateProvider
            .state('create-potion', {
                url : '/create-potion',
                templateUrl : '/views/potion-creation/create-potion.html',
                controller : 'potsPotionCreationController'
            })
    }
})