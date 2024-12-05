"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Avatar_1 = __importDefault(require("../components/Avatar"));
var Dashboard = function () {
    var _a = (0, react_1.useState)(0), diapersChanged = _a[0], setDiapersChanged = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Dashboard" }, void 0), (0, jsx_runtime_1.jsx)(Avatar_1["default"], { props: true }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: [diapersChanged, " fraldas trocadas"] }, void 0)] }, void 0));
};
exports["default"] = Dashboard;
