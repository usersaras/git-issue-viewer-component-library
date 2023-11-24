import { styled } from "../../Config/stitches.config";
import { bgColorVariants } from "../SharedStyles/backgroundColorVariants";
import { borderVariants } from "../SharedStyles/borderVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
import { sizeVariants } from "../SharedStyles/sizeVariants";

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
