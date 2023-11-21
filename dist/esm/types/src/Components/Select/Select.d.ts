/// <reference types="react" />
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
declare const Select: ({ size, rounded, options, }: {
    size: keyof typeof sizeVariants;
    rounded: keyof typeof roundedVariants;
    options: {
        label: string | JSX.Element;
        value: string;
    }[];
}) => import("react/jsx-runtime").JSX.Element;
export default Select;
