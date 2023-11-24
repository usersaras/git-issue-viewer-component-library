export const bgColorVariants = {
  blue: {
    backgroundColor: "$blue700",
  },
  green: {
    backgroundColor: "$green700",
  },
  red: {
    backgroundColor: "$red700",
  },
  grey: {
    backgroundColor: "$gray700",
  },
  lightGrey: {
    backgroundColor: "$gray100",
  },
  white: {
    backgroundColor: "white",
  },
  none: {
    backgroundColor: "transparent",
  },
};

export type BgColorVariantsPropType = keyof typeof bgColorVariants;
