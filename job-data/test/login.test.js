describe('loginController', function () {
    var scope, loginController, locationMock, rootScope, usersMock, event, toState;
    beforeEach(module('app'));
    beforeEach(module(function($provide){
            $provide.factory('users', function() {
                usersMock = sinon.stub({
                    name : "user",
                    password : "password",
                    loggedin : "false"
                });
                return usersMock;
            });
        }));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        locationMock = sinon.stub({path:function(){}});
        event = sinon.stub({preventDefault:function(){}});
        toState = sinon.stub({url:''});
        loginController  = $controller('loginController', {
            $scope: scope,
            $location: locationMock 
        });
    }));
            
    it('should exist logincontroller',function(){
  		expect(loginController).to.exist;
  	});
    it('route should be set to failure initially',function(){
  		expect(loginController.route).to.equal('failure');
  	});
    it('should be undefined at first', function () {
        expect(scope.username).to.be.undefined;
        expect(scope.password).to.be.undefined;
    });
    it('should change location to /home', function() {
        scope.username = usersMock.name;
        scope.password = usersMock.password;
        loginController.validate();
expect(usersMock.loggedin).to.equal('true');
        expect(locationMock.path.calledWith('/home')).to.be.true;
    });
    it('should listen to the broadcast', function() {
rootScope.$broadcast('$stateChangeStart', event, toState);
  expect(loginController.route).to.equal('success');
        });
});

