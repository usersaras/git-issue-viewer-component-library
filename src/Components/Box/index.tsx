import React from "react";
import { BoxWrapper } from "./Box.styled";
import { SizeVariantsPropType } from "../../Config/SharedStyles/sizeVariants";
import { BgColorVariantsPropType } from "../../Config/SharedStyles/backgroundColorVariants";
import { BorderVariantsPropType } from "../../Config/SharedStyles/borderVariants";
import { RoundedVariantsPropType } from "../../Config/SharedStyles/roundedVariants";
import GlobalCSS from "../../Styles/GlobalStyle";

interface BoxProps {
  size?: SizeVariantsPropType;
  background?: BgColorVariantsPropType;
  border?: BorderVariantsPropType;
  children: JSX.Element;
  rounded?: RoundedVariantsPropType;
}

export const Box = ({
  children,
  size,
  background,
  border,
  rounded,
}: BoxProps) => {
  GlobalCSS();
  return (
    <BoxWrapper
      size={size}
      background={background}
      border={border}
      rounded={rounded}
    >
      {children}
    </BoxWrapper>
  );
};
