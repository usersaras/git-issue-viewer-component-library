import { styled } from "../../Config/stitches.config";
import { bgColorVariants } from "../../Config/SharedStyles/backgroundColorVariants";
import { borderVariants } from "../../Config/SharedStyles/borderVariants";
import { roundedVariants } from "../../Config/SharedStyles/roundedVariants";
import { sizeVariants } from "../../Config/SharedStyles/sizeVariants";

export const BoxWrapper = styled(
  "div",
  { width: "100%" },
  {
    variants: {
      size: sizeVariants,
      rounded: roundedVariants,
      background: bgColorVariants,
      border: borderVariants,
    },
  }
);
