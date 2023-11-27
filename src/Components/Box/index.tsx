import React from "react";
import { BoxWrapper } from "./Box.styled";
import { SizeVariantsPropType } from "../SharedStyles/sizeVariants";
import { BgColorVariantsPropType } from "../SharedStyles/backgroundColorVariants";
import { BorderVariantsPropType } from "../SharedStyles/borderVariants";
import { RoundedVariantsPropType } from "../SharedStyles/roundedVariants";

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
