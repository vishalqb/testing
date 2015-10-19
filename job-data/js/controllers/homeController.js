app.controller("homeController", ["$scope", "getData","$location","$rootScope","$state","users", function ($scope, getData, $location,$rootScope,$state,users) {
    "use strict";
    (function init(vm) {
        angular.extend(vm, {
            images: getData.images,
            clicked: clicked
        });
        function clicked(name) {
            getData.selected = name.target.name;
        };
    }(this));
}]);