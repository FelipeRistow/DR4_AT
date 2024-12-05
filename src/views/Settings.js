"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var Settings = function () {
    var _a = (0, react_1.useState)(false), darkMode = _a[0], setDarkMode = _a[1];
    var toggleTheme = function () {
        setDarkMode(!darkMode);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Configura\u00E7\u00F5es" }, void 0), (0, jsx_runtime_1.jsx)(material_1.FormGroup, { children: (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Switch, { value: !darkMode, onChange: toggleTheme }, void 0), label: "Modo Escuro" }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["Modo Escuro ", darkMode ? 'Ativado' : 'Desativado'] }, void 0)] }, void 0));
};
exports["default"] = Settings;
