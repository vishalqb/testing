"use strict";
describe('detailsController', function () {
    var detailsController, scope, getDataMock;
    beforeEach(module('app'));
    beforeEach(module(function ($provide){
        $provide.factory('getData', function () {
           getDataMock = sinon.stub({
                retrieve: function(url) {},
                data: [{"id":"5593aaa04d6f63617a4e1200","jobName":"Nurse Practicioner","type":"Developer","details":{"employer":"Zazio","numberOfVacencies":43,"experianceLevel":"CEO","qualification":"MBA","experianceYears":12,"PostedDate":"11/03/2015","LastDateOfApplication":"20/08/2015"}},{"id":"5593aaa04d6f63617a4f1200","jobName":"Financial Analyst","type":"Mobile","details":{"employer":"Vidoo","numberOfVacencies":8,"experianceLevel":"CEO","qualification":"B.com","experianceYears":14,"PostedDate":"07/04/2015","LastDateOfApplication":"02/08/2015"}}],
                images: [{name : "Developer", path : "assets/images/developers.jpg"},
        {name : "SQL", path : "assets/images/sql.jpg"},
        {name : "Mobile", path : "assets/images/mobile.jpg"}],
                selected: "initial"
            });
            return getDataMock; 
        });
    }));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        detailsController = $controller('detailsController', {
            $scope: scope
        });
    }));
    it('detailsController should exist', function() {
        expect(detailsController).to.exist;
    });
    it('assigns visible to false', function() {
        expect(detailsController.visible).to.not.be.true;
    });
    it('assigns jobdetails to data from the service', function() {
        detailsController.jobDetails = getDataMock.data;
        expect(detailsController.jobDetails).to.exist;
    });
    it('type should be equal to selected', function() {
        expect(detailsController.type).to.equal(getDataMock.selected);
    });
    it('should do the api calling with url', function() {
        expect(getDataMock.retrieve.calledWith('http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data')).to.be.true;
    });

    it('should display the details', function() {
        detailsController.show(getDataMock.data[0].details);
        expect(detailsController.visible).to.be.true;
        expect(detailsController.employer).to.exist;
        expect(detailsController.lastDate).to.exist;
        expect(detailsController.postedDate).to.exist;
        expect(detailsController.expLevel).to.exist;
        expect(detailsController.expYrs).to.exist;
        expect(detailsController.vacancy).to.exist;
        expect(detailsController.qualification).to.exist;
    });
});