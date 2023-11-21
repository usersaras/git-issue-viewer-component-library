"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectComponent = void 0;
const react_1 = __importDefault(require("react"));
const Select = __importStar(require("@radix-ui/react-select"));
const GlobalStyle_1 = __importDefault(require("../../Styles/GlobalStyle"));
const react_icons_1 = require("@radix-ui/react-icons");
const sizeVariants_1 = require("../SharedStyles/sizeVariants");
const roundedVariants_1 = require("../SharedStyles/roundedVariants");
const stitches_config_1 = require("../../Config/stitches.config");
const SelectParent = (0, stitches_config_1.styled)("div", {
    position: "relative",
    height: "max-content",
});
const SelectRoot = (0, stitches_config_1.styled)(Select.Root, {});
const SelectTrigger = (0, stitches_config_1.styled)(Select.Trigger, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4px",
    padding: "8px",
    border: `1px solid $gray500`,
    width: "100px",
}, {
    variants: {
        size: sizeVariants_1.sizeVariants,
        rounded: roundedVariants_1.roundedVariants,
    },
});
const SelectValue = (0, stitches_config_1.styled)(Select.Value, {
    overflow: "hidden",
    background: "green",
    whiteSpace: "nowrap",
});
const SelectContent = (0, stitches_config_1.styled)(Select.Content, {});
const SelectViewport = (0, stitches_config_1.styled)(Select.Viewport, {
    marginTop: "4px",
    background: "white",
    border: `1px solid $gray200`,
    right: "0",
    display: "flex",
    flexDirection: "column",
}, {
    variants: {
        size: sizeVariants_1.sizeVariants,
        rounded: roundedVariants_1.roundedVariants,
    },
});
const SelectItem = (0, stitches_config_1.styled)(Select.Item, {
    cursor: "pointer",
    padding: "4px 8px",
    outline: "none",
    "&:hover": {
        background: "$gray200",
        outline: "none",
        borderRadius: "4px",
        padding: "4px 8px",
    },
});
const ComponentToRender = ({ size, options, rounded, }) => {
    (0, GlobalStyle_1.default)();
    return (react_1.default.createElement(SelectParent, null,
        react_1.default.createElement(SelectRoot, null,
            react_1.default.createElement(SelectTrigger, { size: size, rounded: rounded },
                react_1.default.createElement("p", { style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    } },
                    react_1.default.createElement(SelectValue, { placeholder: "Select" })),
                react_1.default.createElement(Select.Icon, { asChild: true, children: react_1.default.createElement(react_icons_1.ChevronDownIcon, null) })),
            react_1.default.createElement(SelectContent, { position: "popper" },
                react_1.default.createElement(SelectViewport, { size: size, rounded: rounded }, options.map((option, index) => {
                    return (react_1.default.createElement(SelectItem, { key: index, value: option.value },
                        react_1.default.createElement(Select.ItemText, { children: option.label })));
                }))))));
};
exports.SelectComponent = (0, stitches_config_1.styled)(ComponentToRender, {});
//# sourceMappingURL=Select.styled.js.map