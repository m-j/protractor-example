define(function () {
    var WizardStateService = function ($rootScope) {
        var localData
        var dataTtl = 0

        this.push = function(data){
            localData = data
            dataTtl = 1
        }

        this.pop = function(){
            var data = localData
            localData = undefined
            return data
        }

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if(dataTtl < 1){
                localData = undefined
                return
            }

            dataTtl--
        })
    }

    return WizardStateService;
});