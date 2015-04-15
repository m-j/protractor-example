requirejs.config({
    paths: {
        "angular" : "libs/angular/angular",
        "restangular" : "libs/restangular/dist/restangular",
        "ui-router" : "libs/ui-router/release/angular-ui-router",
        "lodash" : "libs/lodash/lodash",
        "amplify-store" : "libs/amplify/lib/amplify.store",
        "angular-mocks" : 'libs/angular-mocks/angular-mocks'
    },
    shim : {
        angular : { exports: 'angular', deps : ['lodash']},
        restangular : ['angular'] ,
        "ui-router" : ['angular'],
        "amplify-store" : {exports: "amplify.store"},
        "angular-mocks" : ['angular']
    }
})