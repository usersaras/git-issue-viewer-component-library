"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(require("react"));
const Select_styled_1 = require("./Select.styled");
const Select = ({ size, rounded, options, }) => {
    return react_1.default.createElement(Select_styled_1.SelectComponent, { size: size, rounded: rounded, options: options });
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map