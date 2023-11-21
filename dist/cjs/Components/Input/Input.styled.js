"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = void 0;
const react_1 = require("@stitches/react");
const sizeVariants_1 = require("../SharedStyles/sizeVariants");
const roundedVariants_1 = require("../SharedStyles/roundedVariants");
const globalInputStyles = {
    width: "100%",
    padding: "8px",
    border: `1px solid $gray300`,
};
exports.StyledInput = (0, react_1.styled)("input", globalInputStyles, {
    variants: {
        sizeStyle: sizeVariants_1.sizeVariants,
        rounded: roundedVariants_1.roundedVariants,
    },
});
//# sourceMappingURL=Input.styled.js.map