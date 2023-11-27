export const fontSizeVariants = {
  xs: {
    fontSize: "$1",
  },
  sm: {
    fontSize: "$2",
  },
  base: {
    fontSize: "$3",
  },
  lg: {
    fontSize: "$4",
  },
  xl: {
    fontSize: "$5",
  },
  "2xl": {
    fontSize: "$6",
  },
  "3xl": {
    fontSize: "$7",
  },
};

export type FontSizeVariantsPropType = keyof typeof fontSizeVariants;
