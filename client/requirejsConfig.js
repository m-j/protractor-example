requirejs.config({
    paths: {
        "angular" : "libs/angular/angular",
        "restangular" : "libs/restangular/dist/restangular",
        "ui-router" : "libs/ui-router/release/angular-ui-router",
        "lodash" : "libs/lodash/dist/lodash"
    },
    shim : {
        angular : { exports: 'angular', deps : ['lodash']},
        restangular : ['angular'] ,
        "ui-router" : ['angular']
    }
})