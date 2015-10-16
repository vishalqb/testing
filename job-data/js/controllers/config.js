app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider
        .state("login", {
            url : "/",
            templateUrl : "templates/login.html",
            controller : "loginController"
        })
        .state("home", {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : "homeController"
        })
        .state("details", {
            url : "/details",
            templateUrl : "templates/details.html",
            controller : "detailsController"
        });
    $urlRouterProvider.otherwise("/");
}]);

//app.run(["$rootScope","$location","$state","users", function($rootScope,$location,$state,users){
//    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
//        if (users.loggedin==="false"  && toState.url==="/home") {
//            event.preventDefault();
//            $location.path("/");
//        } else if(users.loggedin==="false" && toState.url==="/details"){
//            event.preventDefault();
//            $location.path("/");
//       }
//    });
//
//}]);