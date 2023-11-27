import React from "react";
import { StyledText } from "./text.styled";
import { ColorVariantsPropType } from "../SharedStyles/colorVariants";

export const Text = ({
  text,
  color,
}: {
  text: string;
  color: ColorVariantsPropType;
}) => {
  return <StyledText color={color}>{text}</StyledText>;
};
