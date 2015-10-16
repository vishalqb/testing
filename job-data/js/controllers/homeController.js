app.controller("homeController", ["$scope", "getData","$location","$rootScope","$state","users", function ($scope, getData, $location,$rootScope,$state,users) {
    "use strict";
    $scope.images = getData.images;
    $scope.clicked = function (name) {
        getData.selected = name.target.name;
    };
}]);