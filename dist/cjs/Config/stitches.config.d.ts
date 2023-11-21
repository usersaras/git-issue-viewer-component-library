export declare const styled: <Type extends import("react").ComponentType<any> | keyof JSX.IntrinsicElements | import("@stitches/react/types/util").Function, Composers extends (string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        red900: string;
        red800: string;
        red700: string;
        red600: string;
        red500: string;
        red400: string;
        red300: string;
        red200: string;
        red100: string;
        red50: string;
        green900: string;
        green800: string;
        green700: string;
        green600: string;
        green500: string;
        green400: string;
        green300: string;
        green200: string;
        green100: string;
        green50: string;
        blue900: string;
        blue800: string;
        blue700: string;
        blue600: string;
        blue500: string;
        blue400: string;
        blue300: string;
        blue200: string;
        blue100: string;
        blue50: string;
        gray900: string;
        gray800: string;
        gray700: string;
        gray600: string;
        gray500: string;
        gray400: string;
        gray300: string;
        gray200: string;
        gray100: string;
        gray50: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        round: string;
    };
    fontWeights: {
        thin: string;
        extraLight: string;
        light: string;
        normal: string;
        medium: string;
        semiBold: string;
        bold: string;
        extraBold: string;
        black: string;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        red900: string;
        red800: string;
        red700: string;
        red600: string;
        red500: string;
        red400: string;
        red300: string;
        red200: string;
        red100: string;
        red50: string;
        green900: string;
        green800: string;
        green700: string;
        green600: string;
        green500: string;
        green400: string;
        green300: string;
        green200: string;
        green100: string;
        green50: string;
        blue900: string;
        blue800: string;
        blue700: string;
        blue600: string;
        blue500: string;
        blue400: string;
        blue300: string;
        blue200: string;
        blue100: string;
        blue50: string;
        gray900: string;
        gray800: string;
        gray700: string;
        gray600: string;
        gray500: string;
        gray400: string;
        gray300: string;
        gray200: string;
        gray100: string;
        gray50: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        round: string;
    };
    fontWeights: {
        thin: string;
        extraLight: string;
        light: string;
        normal: string;
        medium: string;
        semiBold: string;
        bold: string;
        extraBold: string;
        black: string;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
