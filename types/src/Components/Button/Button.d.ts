import React, { ButtonHTMLAttributes } from "react";
import { colorVariants } from "../SharedStyles/colorVariants";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: keyof typeof colorVariants;
    size: keyof typeof sizeVariants;
    rounded: keyof typeof roundedVariants;
    children: JSX.Element | string;
    onClick: () => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
