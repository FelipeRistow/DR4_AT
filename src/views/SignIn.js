"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var auth_1 = require("../services/auth");
var react_router_dom_1 = require("react-router-dom");
var SignIn = function (_a) {
    var handleSignInSuccess = _a.handleSignInSuccess;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        (0, auth_1.login)("IOJGHNRIOUJGNHR");
        handleSignInSuccess();
        navigate("/dashboard");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Sign In" }, void 0), (0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Email", required: true }, void 0), (0, jsx_runtime_1.jsx)("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "Senha", required: true }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: "Entrar" }), void 0)] }), void 0)] }, void 0));
};
exports["default"] = SignIn;
