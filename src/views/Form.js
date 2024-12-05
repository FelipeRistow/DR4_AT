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
var react_1 = require("react");
var dayjs_1 = __importDefault(require("dayjs"));
var DateTimePicker_1 = require("@mui/x-date-pickers/DateTimePicker");
var material_1 = require("@mui/material");
var Form = function () {
    var _a = (0, react_1.useState)((0, dayjs_1["default"])()), diaperChangeTime = _a[0], setDiaperChangeTime = _a[1];
    var _b = (0, react_1.useState)(null), diaperSituation = _b[0], setDiaperSituation = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Formul\u00E1rio" }, void 0), (0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ id: 'diaper-situation' }, { children: "Situa\u00E7\u00E3o da fralda" }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Select, __assign({ labelId: 'diaper-situation', label: "Age", value: diaperSituation, onChange: function (e) { return setDiaperSituation(e.target.value); } }, { children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: "POOR" }, { children: "Ruim" }), void 0), (0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: "ACCEPTABLE" }, { children: "Aceit\u00E1vel" }), void 0), (0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: "GOOD" }, { children: "Boa" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { style: { height: 50 } }, void 0), (0, jsx_runtime_1.jsx)("label", __assign({ id: 'diaper-change-time' }, { children: "Trocada em" }), void 0), (0, jsx_runtime_1.jsx)(DateTimePicker_1.DateTimePicker, { labelId: 'diaper-change-time', value: diaperChangeTime, onChange: function (e) { return setDiaperChangeTime(e.target.value); } }, void 0), (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ type: "submit" }, { children: "SALVAR" }), void 0)] }), void 0)] }, void 0));
};
exports["default"] = Form;
