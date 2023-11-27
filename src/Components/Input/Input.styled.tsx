import { sizeVariants } from "../../Config/SharedStyles/sizeVariants";
import { roundedVariants } from "../../Config/SharedStyles/roundedVariants";
import { styled } from "../../Config/stitches.config";

const globalInputStyles = {
  padding: "8px",
  border: `1px solid $gray300`,
};

export const StyledInput = styled("input", globalInputStyles, {
  variants: {
    sizeStyle: sizeVariants,
    rounded: roundedVariants,
  },
});
