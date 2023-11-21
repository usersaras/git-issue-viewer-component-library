/// <reference types="react" />
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
export declare const SelectComponent: import("@stitches/react/types/styled-component").StyledComponent<({ size, options, rounded, }: {
    size: keyof typeof sizeVariants;
    options: {
        value: string;
        label: string | JSX.Element;
    }[];
    rounded: keyof typeof roundedVariants;
}) => import("react/jsx-runtime").JSX.Element, {}, {}, import("@stitches/react/types/css-util").CSS<{}, {}, {}, {}>>;
