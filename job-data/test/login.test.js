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
        toState = sinon.stub({url:""});
        loginController  = $controller('loginController', {
            $scope: scope,
            $location: locationMock 
        });
    }));
            
    it('should exist logincontroller',function(){
  		expect(loginController).to.exist;
  	});
    it('should be undefined at first', function () {
        expect(scope.username).to.be.undefined;
        expect(scope.password).to.be.undefined;
    });
    it('should change location to /home', function() {
        scope.username = "user";
        scope.password = "password";
        loginController.validate();
        
expect(locationMock.path.calledWith('/home')).to.be.true;
    });
    describe('state change listener', function(){
        it('should prevent direct entry to home page', function() {
rootScope.$broadcast('$stateChangeStart', event, toState);
  expect(loginController.route).to.equal('success');
        });
    });
});

