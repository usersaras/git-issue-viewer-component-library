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
import React from "react";
import { StyledInput } from "./Input.styled";
export const Input = (_a) => {
    var { onChange, sizeStyle = "base", rounded = "none", errors } = _a, props = __rest(_a, ["onChange", "sizeStyle", "rounded", "errors"]);
    return (React.createElement(React.Fragment, null,
        " ",
        React.createElement(StyledInput, Object.assign({}, props, { onChange: onChange, sizeStyle: sizeStyle, rounded: rounded }))));
};
//# sourceMappingURL=Input.js.map