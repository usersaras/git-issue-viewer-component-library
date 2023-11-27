import { styled } from "../../Config/stitches.config";
import { colorVariants } from "../../Config/SharedStyles/colorVariants";
import { fontSizeVariants } from "../../Config/SharedStyles/fontSizeVariants";
import { fontWeightVariants } from "../../Config/SharedStyles/fontWeightVariants";

const globalStyles = {
  padding: "0",
  margin: "0",
};

const variantStyles = {
  variants: {
    color: colorVariants,
    fontSize: fontSizeVariants,
    fontWeight: fontWeightVariants,
  },
};

export const StyledText = styled("p", globalStyles, variantStyles);
export const StyledHeading1 = styled("h1", globalStyles, variantStyles);
export const StyledHeading2 = styled("h2", globalStyles, variantStyles);
export const StyledHeading3 = styled("h3", globalStyles, variantStyles);
export const StyledHeading4 = styled("h4", globalStyles, variantStyles);
export const StyledHeading5 = styled("h5", globalStyles, variantStyles);
export const StyledHeading6 = styled("h6", globalStyles, variantStyles);
export const StyledSpan = styled("span", globalStyles, variantStyles);
