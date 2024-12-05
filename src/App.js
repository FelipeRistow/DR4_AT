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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./styles.css");
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute_1 = __importDefault(require("./utils/ProtectedRoute"));
var Home_1 = __importDefault(require("./views/Home"));
var SignIn_1 = __importDefault(require("./views/SignIn"));
var SignUp_1 = __importDefault(require("./views/SignUp"));
var Dashboard_1 = __importDefault(require("./views/Dashboard"));
var Settings_1 = __importDefault(require("./views/Settings"));
var Form_1 = __importDefault(require("./views/Form"));
var Alert_1 = __importDefault(require("./components/Alert"));
function App() {
    var _a = react_1["default"].useState(false), signInSuccess = _a[0], setSignInSuccess = _a[1];
    var handleSignInSuccess = function () {
        setSignInSuccess(true);
        setTimeout(function () { return setSignInSuccess(false); }, 2000);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [signInSuccess && ((0, jsx_runtime_1.jsx)(Alert_1["default"], __assign({ severity: "success" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Login efetuado com sucesso!" }, void 0) }), void 0)), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)("div", { children: "V\u00E1 para uma p\u00E1gina" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/home", element: (0, jsx_runtime_1.jsx)(Home_1["default"], {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/sign-in", element: (0, jsx_runtime_1.jsx)(SignIn_1["default"], { handleSignInSuccess: handleSignInSuccess }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/sign-up", element: (0, jsx_runtime_1.jsx)(SignUp_1["default"], {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(Dashboard_1["default"], {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/settings", element: (0, jsx_runtime_1.jsx)(Settings_1["default"], {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/form", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1["default"], { children: (0, jsx_runtime_1.jsx)(Form_1["default"], {}, void 0) }, void 0) }, void 0)] }, void 0)] }), void 0));
}
exports["default"] = App;
