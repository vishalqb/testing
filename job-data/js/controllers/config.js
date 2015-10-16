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

app.run(["$rootScope", "$state","users", function ($rootScope, $state, users) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        console.log("entered");
        if ((users.loggedin)) {
           console.log(fromState);
           event.preventDefault();
           $state.go("login");
        } else {
           $state.go("home");
       }
    });
}]);