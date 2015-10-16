app.controller("detailsController", ["$scope", "getData","$rootScope","$location","$state","$timeout", function ($scope, getData, $rootScope, $location, $state,$timeout) {
    "use strict";
    $scope.visible = false;
    $scope.type = getData.selected;
    getData.retrieve("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
    $timeout(function(){
        $scope.jobDetails = getData.data;
    },200);
    $scope.show = function (receivedData) {
    $scope.visible = true;
    $scope.employer = receivedData.employer;
    $scope.lastDate = receivedData.LastDateOfApplication;
    $scope.postedDate = receivedData.PostedDate;
    $scope.expLevel = receivedData.experianceLevel;
    $scope.expYrs = receivedData.experianceYears;
    $scope.vacancy = receivedData.numberOfVacencies;
    $scope.qualification = receivedData.qualification;
    };    
    
}]);
