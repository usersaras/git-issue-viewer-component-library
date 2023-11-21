import React from "react";
import { SelectComponent } from "./Select.styled";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";

export const Select = ({
  size,
  rounded,
  options,
}: {
  size: keyof typeof sizeVariants;
  rounded: keyof typeof roundedVariants;
  options: {
    label: string | JSX.Element;
    value: string;
  }[];
}) => {
  return <SelectComponent size={size} rounded={rounded} options={options} />;
};
