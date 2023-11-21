/// <reference types="react" />
import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const colorVariants: {
    blue: {
        backgroundColor: string;
        color: string;
        border: string;
        "&:hover": {
            backgroundColor: string;
            border: string;
        };
    };
    green: {
        backgroundColor: string;
        color: string;
        border: string;
        "&:hover": {
            backgroundColor: string;
            border: string;
        };
    };
    red: {
        backgroundColor: string;
        color: string;
        border: string;
        "&:hover": {
            backgroundColor: string;
            border: string;
        };
    };
    grey: {
        backgroundColor: string;
        color: string;
        border: string;
        "&:hover": {
            backgroundColor: string;
            border: string;
        };
    };
    none: {
        border: string;
        backgroundColor: string;
        color: string;
    };
};

declare const sizeVariants: {
    xs: {
        padding: string;
        fontSize: string;
    };
    sm: {
        padding: string;
        fontSize: string;
    };
    base: {
        padding: string;
        fontSize: string;
    };
    lg: {
        padding: string;
        fontSize: string;
    };
    xl: {
        padding: string;
        fontSize: string;
    };
};

declare const roundedVariants: {
    none: {
        borderRadius: string;
    };
    xs: {
        borderRadius: string;
    };
    sm: {
        borderRadius: string;
    };
    md: {
        borderRadius: string;
    };
    lg: {
        borderRadius: string;
    };
    xl: {
        borderRadius: string;
    };
    full: {
        borderRadius: string;
    };
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: keyof typeof colorVariants;
    size: keyof typeof sizeVariants;
    rounded: keyof typeof roundedVariants;
    children: JSX.Element | string;
    onClick: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    sizeStyle?: keyof typeof sizeVariants;
    rounded?: keyof typeof roundedVariants;
    onChange?: () => void;
    errors?: string;
}
declare const Input: ({ onChange, sizeStyle, rounded, errors, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

declare const Select: ({ size, rounded, options, }: {
    size: keyof typeof sizeVariants;
    rounded: keyof typeof roundedVariants;
    options: {
        label: string | JSX.Element;
        value: string;
    }[];
}) => react_jsx_runtime.JSX.Element;

export { Button, Input, Select };
