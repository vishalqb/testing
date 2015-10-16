app.controller("loginController", ["$scope", "$location","users","$state","$rootScope", function ($scope, $location,users,$state,$rootScope) {
    "use strict";
    $scope.validate = function () {
        if ($scope.username === users.name && $scope.password === users.password) {
            users.loggedin = "true";
            $location.path("/home");
            
        } else {
            angular.element($("#errorText")).text("Invalid username and password");
        }
    };
    
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        if (users.loggedin==="false"  && toState.url==="/home") {
            event.preventDefault();
            $location.path("/");
        } else if(users.loggedin==="false" && toState.url==="/details"){
            event.preventDefault();
            $location.path("/");
       }
    });
    
}]);

