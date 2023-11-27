export const borderVariants = {
  blue: {
    border: "1px solid $blue700",
  },
  grey: {
    border: "1px solid $gray700",
  },
  lightGrey: {
    border: "1px solid $gray400",
  },
  leftBlue: {
    borderLeft: "3px solid $blue700",
  },
  none: {
    border: "none",
  },
};

export type BorderVariantsPropType = keyof typeof borderVariants;
