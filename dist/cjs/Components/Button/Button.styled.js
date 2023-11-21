"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.globalButtonStyles = void 0;
const stitches_config_1 = require("../../Config/stitches.config");
const colorVariants_1 = require("../SharedStyles/colorVariants");
const roundedVariants_1 = require("../SharedStyles/roundedVariants");
const sizeVariants_1 = require("../SharedStyles/sizeVariants");
exports.globalButtonStyles = {
    cursor: "pointer",
    transition: "0.2s",
};
exports.Button = (0, stitches_config_1.styled)("button", exports.globalButtonStyles, {
    variants: {
        colorVariant: colorVariants_1.colorVariants,
        sizeVariant: sizeVariants_1.sizeVariants,
        rounded: roundedVariants_1.roundedVariants,
    },
});
//# sourceMappingURL=Button.styled.js.map