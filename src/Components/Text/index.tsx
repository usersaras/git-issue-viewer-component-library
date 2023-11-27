import React from "react";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
  StyledSpan,
  StyledText,
} from "./text.styled";
import { ColorVariantsPropType } from "../../Config/SharedStyles/colorVariants";
import { FontSizeVariantsPropType } from "../../Config/SharedStyles/fontSizeVariants";
import GlobalCSS from "../../Styles/GlobalStyle";
import { FontWeightVariantsPropType } from "../../Config/SharedStyles/fontWeightVariants";

export interface TextPropTypes {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: string;
  color?: ColorVariantsPropType;
  fontSize?: FontSizeVariantsPropType;
  fontWeight?: FontWeightVariantsPropType;
}

export const Text = ({
  as = "p",
  children,
  color = "darkGrey",
  fontSize = "base",
  fontWeight = "base",
}: TextPropTypes) => {
  GlobalCSS();

  const props = { color, fontSize, fontWeight };
  switch (as) {
    case "p":
      return <StyledText {...props}>{children}</StyledText>;
    case "h1":
      return <StyledHeading1 {...props}>{children}</StyledHeading1>;
    case "h2":
      return <StyledHeading2 {...props}>{children}</StyledHeading2>;
    case "h3":
      return <StyledHeading3 {...props}>{children}</StyledHeading3>;
    case "h4":
      return <StyledHeading4 {...props}>{children}</StyledHeading4>;
    case "h5":
      return <StyledHeading5 {...props}>{children}</StyledHeading5>;
    case "h6":
      return <StyledHeading6 {...props}>{children}</StyledHeading6>;
    case "span":
      return <StyledSpan {...props}>{children}</StyledSpan>;
    default:
      return <StyledText {...props}>{children}</StyledText>;
  }
};
