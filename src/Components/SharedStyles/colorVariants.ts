export const colorVariants = {
  blue: {
    color: "$blue700",
  },
  green: {
    color: "$green700",
  },
  red: {
    color: "$red700",
  },
  darkGrey: {
    color: "$gray900",
  },
  grey: {
    color: "$gray700",
  },
  lightGrey: {
    color: "$gray400",
  },
};

export type ColorVariantsPropType = keyof typeof colorVariants;
