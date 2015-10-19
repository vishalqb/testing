app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider
        .state("login", {
            url : "/",
            templateUrl : "templates/login.html",
            controller : "loginController as login"
        })
        .state("home", {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : "homeController as home"
        })
        .state("details", {
            url : "/details",
            templateUrl : "templates/details.html",
            controller : "detailsController as details"
        });
    $urlRouterProvider.otherwise("/");
}]);

