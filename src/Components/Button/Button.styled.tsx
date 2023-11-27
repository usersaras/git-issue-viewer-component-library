import { styled } from "../../Config/stitches.config";
import { colorVariants } from "../../Config/SharedStyles/buttonColorVariants";
import { roundedVariants } from "../../Config/SharedStyles/roundedVariants";
import { sizeVariants } from "../../Config/SharedStyles/sizeVariants";

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
