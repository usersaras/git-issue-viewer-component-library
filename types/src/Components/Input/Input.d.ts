import { InputHTMLAttributes } from "react";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    sizeStyle?: keyof typeof sizeVariants;
    rounded?: keyof typeof roundedVariants;
    onChange?: () => void;
    errors?: string;
}
export declare const Input: ({ onChange, sizeStyle, rounded, errors, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
