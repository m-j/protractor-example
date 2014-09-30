requirejs.config({
    paths: {
        "angular" : "libs/angular/angular",
        "restangular" : "libs/restangular/dist/restangular",
        "ui-router" : "libs/ui-router/release/angular-ui-router",
        "lodash" : "libs/lodash/dist/lodash",
        "amplify-store" : "libs/amplify/lib/amplify.store"
    },
    shim : {
        angular : { exports: 'angular', deps : ['lodash']},
        restangular : ['angular'] ,
        "ui-router" : ['angular'],
        "amplify-store" : {exports: "amplify.store"}
    }
})