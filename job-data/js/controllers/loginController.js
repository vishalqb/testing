app.controller("loginController", ["$scope", "$location","users","$state", function ($scope, $location,users,$state) {
    "use strict";
    $scope.validate = function () {
        if ($scope.username === users.name && $scope.password === users.password) {
            users.loggedin = true;
            $location.path("/home");
            
        } else {
            angular.element($("#errorText")).text("Invalid username and password");
        }
    };
}]);

