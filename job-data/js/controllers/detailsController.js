app.controller("detailsController", ["$scope", "getData", "$rootScope", "$location", "$state", "$timeout", function ($scope, getData, $rootScope, $location, $state, $timeout) {
    "use strict";
    (function init(vm) {
        getData.retrieve("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
        $timeout(function () {
            vm.jobDetails = getData.data;
        }, 200);
        angular.extend(vm, {
            visible: false,
            type: getData.selected,
            show : show
        });
        function show(receivedData) {
            vm.visible = true;
            vm.employer = receivedData.employer;
            vm.lastDate = receivedData.LastDateOfApplication;
            vm.postedDate = receivedData.PostedDate;
            vm.expLevel = receivedData.experianceLevel;
            vm.expYrs = receivedData.experianceYears;
            vm.vacancy = receivedData.numberOfVacencies;
            vm.qualification = receivedData.qualification;
        }
    }(this));
}]);
