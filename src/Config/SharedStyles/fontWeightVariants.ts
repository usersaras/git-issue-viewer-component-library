export const fontWeightVariants = {
  hairline: {
    fontWeight: "$thin",
  },
  extraLight: {
    fontWeight: "$extraLight",
  },
  light: {
    fontWeight: "$light",
  },
  base: {
    fontWeight: "$normal",
  },
  medium: {
    fontWeight: "$medium",
  },
  semiBold: {
    fontWeight: "$semiBold",
  },
  bold: {
    fontWeight: "$bold",
  },
  extraBold: {
    fontWeight: "$extraBold",
  },
  black: {
    fontWeight: "$black",
  },
};

export type FontWeightVariantsPropType = keyof typeof fontWeightVariants;
