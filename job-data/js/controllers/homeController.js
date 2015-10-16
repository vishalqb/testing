app.controller("homeController", ["$scope", "getData","$location", function ($scope, getData, $location) {
    "use strict";
    getData.retrieve("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
    $scope.images = getData.images;
    $scope.clicked = function (name) {
        getData.selected = name.target.name;
    };
}]);