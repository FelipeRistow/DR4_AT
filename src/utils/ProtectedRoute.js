"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("../services/auth");
var ProtectedRoute = function (_a) {
    var children = _a.children;
    if (!(0, auth_1.isLoggedIn)()) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/sign-in", replace: true }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
};
exports["default"] = ProtectedRoute;
