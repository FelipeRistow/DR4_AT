"use strict";
exports.__esModule = true;
exports.logout = exports.login = exports.isLoggedIn = void 0;
var isLoggedIn = function () {
    return localStorage.getItem("auth-token");
};
exports.isLoggedIn = isLoggedIn;
var login = function (token) {
    return localStorage.setItem("auth-token", token);
};
exports.login = login;
var logout = function () {
    return localStorage.removeItem("auth-token");
};
exports.logout = logout;
