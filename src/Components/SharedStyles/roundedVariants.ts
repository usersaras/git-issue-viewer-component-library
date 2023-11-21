export const roundedVariants = {
  none: {
    borderRadius: "0",
  },
  xs: {
    borderRadius: "$1",
  },
  sm: {
    borderRadius: "$2",
  },
  md: {
    borderRadius: "$3",
  },
  lg: {
    borderRadius: "$4",
  },
  xl: {
    borderRadius: "$5",
  },
  full: {
    borderRadius: "$round",
  },
};

export type RoundedVariantsPropType = keyof typeof roundedVariants;
