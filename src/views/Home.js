"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Home = function () {
    var _a = (0, react_1.useState)(0), currentTime = _a[0], setCurrentTime = _a[1];
    setInterval(function () { return setCurrentTime(currentTime + 1); }, 1000);
    return ((0, jsx_runtime_1.jsxs)("div", { children: ["Voc\u00EA est\u00E1 aqui h\u00E1 ", currentTime, " segundos"] }, void 0));
};
exports["default"] = Home;
