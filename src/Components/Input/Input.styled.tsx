import { styled } from "@stitches/react";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";

const globalInputStyles = {
  width: "100%",
  padding: "8px",
  border: `1px solid $gray300`,
};

export const StyledInput = styled("input", globalInputStyles, {
  variants: {
    sizeStyle: sizeVariants,
    rounded: roundedVariants,
  },
});
