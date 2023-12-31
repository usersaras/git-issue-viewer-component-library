import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      red900: "#7F1D1D",
      red800: "#991B1B",
      red700: "#B91C1C",
      red600: "#DC2626",
      red500: "#EF4444",
      red400: "#F87171",
      red300: "#FCA5A5",
      red200: "#FECACA",
      red100: "#FEE2E2",
      red50: "#FEF2F2",
      green900: "#14532D",
      green800: "#166534",
      green700: "#15803D",
      green600: "#16A34A",
      green500: "#22C55E",
      green400: "#4ADE80",
      green300: "#86EFAC",
      green200: "#BBF7D0",
      green100: "#DCFCE7",
      green50: "#F0FDF4",
      blue900: "#1E3A8A",
      blue800: "#1E40AF",
      blue700: "#1D4ED8",
      blue600: "#2563EB",
      blue500: "#3B82F6",
      blue400: "#60A5FA",
      blue300: "#93C5FD",
      blue200: "#BFDBFE",
      blue100: "#DBEAFE",
      blue50: "#EFF6FF",
      gray900: "#18181B",
      gray800: "#27272A",
      gray700: "#3F3F46",
      gray600: "#52525B",
      gray500: "#71717A",
      gray400: "#A1A1AA",
      gray300: "#D4D4D8",
      gray200: "#E4E4E7",
      gray100: "#F4F4F5",
      gray50: "#FAFAFA",
    },
    fonts: {
      sans: "Inter, sans-serif",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "64px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
      7: "256px",
      8: "512px",
      full: "100%",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      4: "10px",
      5: "12px",
      round: "9999px",
    },
    fontWeights: {
      thin: "100",
      extraLight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    minWid: (value: string) => ({
      minWidth: value,
    }),
    maxWid: (value: string) => ({
      maxWidth: value,
    }),
    rowStart: (value: string) => ({
      gridRowStart: value,
    }),
    rowEnd: (value: string) => ({
      gridRowEnd: value,
    }),
    columns: (value: string) => ({
      gridTemplateColumns: value,
    }),
    rows: (value: string) => ({
      gridTemplateColumns: value,
    }),
    g: (value: string) => ({
      gap: value,
    }),
    flexAlign: (value: string) => ({
      alignItems: value,
    }),
    flexJustify: (value: string) => ({
      justifyContent: value,
    }),
    direction: (value: string) => ({
      flexDirection: value,
    }),
  },
});
