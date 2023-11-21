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
import { Button as StyledButton } from "./Button.styled";
import GlobalCSS from "../../Styles/GlobalStyle";
export const Button = React.forwardRef((_a, ref) => {
    var { color, size, rounded, children, onClick } = _a, props = __rest(_a, ["color", "size", "rounded", "children", "onClick"]);
    GlobalCSS();
    return (React.createElement(StyledButton, Object.assign({ colorVariant: color, sizeVariant: size, onClick: onClick, rounded: rounded, ref: ref }, props), children));
});
//# sourceMappingURL=Button.js.map