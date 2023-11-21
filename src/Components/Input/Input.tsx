import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styled";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeStyle?: keyof typeof sizeVariants;
  rounded?: keyof typeof roundedVariants;
  onChange?: () => void;
  errors?: string;
}

const Input = ({
  onChange,
  sizeStyle = "base",
  rounded = "none",
  errors,
  ...props
}: InputProps) => {
  return (
    <>
      {" "}
      <StyledInput
        {...props}
        onChange={onChange}
        sizeStyle={sizeStyle}
        rounded={rounded}
      />
    </>
  );
};

export default Input;
