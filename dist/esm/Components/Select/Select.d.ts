import React from "react";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
export declare const Select: ({ size, rounded, options, }: {
    size: keyof typeof sizeVariants;
    rounded: keyof typeof roundedVariants;
    options: {
        label: string | JSX.Element;
        value: string;
    }[];
}) => React.JSX.Element;
