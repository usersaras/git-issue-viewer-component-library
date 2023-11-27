import React from "react";
import { SelectComponent } from "./Select.styled";
import { SizeVariantsPropType } from "../../Config/SharedStyles/sizeVariants";
import { RoundedVariantsPropType } from "../../Config/SharedStyles/roundedVariants";

export interface SelectProps {
  size: SizeVariantsPropType;
  options: { value: string; label: string | JSX.Element }[];
  rounded: RoundedVariantsPropType;
  minWidth?: string;
  maxWidth?: string;
  placeholder?: string;
}

export const Select = ({
  size,
  rounded,
  options,
  minWidth,
  maxWidth = "3",
  placeholder,
}: SelectProps) => {
  const maxWid = maxWidth ? `$sizes$${maxWidth}` : "$sizes$6";
  return (
    <SelectComponent
      size={size}
      rounded={rounded}
      options={options}
      placeholder={placeholder}
      minWidth={minWidth || maxWid}
      maxWidth={maxWid}
    />
  );
};
