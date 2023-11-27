import { styled } from "../../Config/stitches.config";
import { colorVariants } from "../SharedStyles/buttonColorVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
import { sizeVariants } from "../SharedStyles/sizeVariants";

export const globalButtonStyles = {
  cursor: "pointer",
  transition: "0.2s",
};

export const Button = styled("button", globalButtonStyles, {
  variants: {
    colorVariant: colorVariants,
    sizeVariant: sizeVariants,
    rounded: roundedVariants,
  },
});
