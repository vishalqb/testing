app.factory("users", function () {
    "use strict";
    var user = {};
    user.name = "user";
    user.password = "password";
    user.loggedin = "false";
    return user;
});