"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button_styled_1 = require("./Button.styled");
const GlobalStyle_1 = __importDefault(require("../../Styles/GlobalStyle"));
exports.Button = react_1.default.forwardRef((_a, ref) => {
    var { color, size, rounded, children, onClick } = _a, props = __rest(_a, ["color", "size", "rounded", "children", "onClick"]);
    (0, GlobalStyle_1.default)();
    return (react_1.default.createElement(Button_styled_1.Button, Object.assign({ colorVariant: color, sizeVariant: size, onClick: onClick, rounded: rounded, ref: ref }, props), children));
});
//# sourceMappingURL=Button.js.map