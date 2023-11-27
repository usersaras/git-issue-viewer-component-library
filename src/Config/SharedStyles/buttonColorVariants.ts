export const colorVariants = {
  blue: {
    backgroundColor: "$blue700",
    color: "$gray200",
    border: "1px solid $blue700",

    "&:hover": {
      backgroundColor: "$blue800",
      border: "1px solid $blue800",
    },
  },
  green: {
    backgroundColor: "$green700",
    color: "$gray200",
    border: "1px solid $green700",

    "&:hover": {
      backgroundColor: "$green800",
      border: "1px solid $green800",
    },
  },
  red: {
    backgroundColor: "$red700",
    color: "$gray200",
    border: "1px solid $red700",

    "&:hover": {
      backgroundColor: "$red800",
      border: "1px solid $red800",
    },
  },
  grey: {
    backgroundColor: "$gray700",
    color: "$gray200",
    border: "1px solid $gray700",

    "&:hover": {
      backgroundColor: "$gray800",
      border: "1px solid $gray800",
    },
  },
  none: {
    border: `1px solid $gray500`,
    backgroundColor: "transparent",
    color: "$gray500",
  },
};

export type ColorVariantsPropType = keyof typeof colorVariants;
