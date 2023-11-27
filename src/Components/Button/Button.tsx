import React, { ButtonHTMLAttributes, Ref } from "react";
import { Button as StyledButton } from "./Button.styled";
import GlobalCSS from "../../Styles/GlobalStyle";
import { colorVariants } from "../SharedStyles/buttonColorVariants";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof colorVariants;
  size: keyof typeof sizeVariants;
  rounded: keyof typeof roundedVariants;
  children: JSX.Element | string;
  onClick?: () => void;
}

export const Button = React.forwardRef(
  (
    { color, size, rounded, children, onClick, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    GlobalCSS();
    return (
      <StyledButton
        colorVariant={color}
        sizeVariant={size}
        onClick={onClick}
        rounded={rounded}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);
