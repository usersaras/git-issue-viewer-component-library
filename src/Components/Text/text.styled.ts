import { styled } from "../../Config/stitches.config";
import { colorVariants } from "../SharedStyles/colorVariants";

export const StyledText = styled(
  "p",
  {
    padding: "0",
    margin: "0",
  },
  {
    variants: {
      color: colorVariants,
    },
  }
);
