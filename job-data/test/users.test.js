"use strict";
describe('users', function() {
    beforeEach(module('app'));
    it('should have the initial values', inject(function(users){
        expect(users.name).to.equal('user');
        expect(users.password).to.equal('password');
        expect(users.loggedin).to.equal('false');
    }));
});