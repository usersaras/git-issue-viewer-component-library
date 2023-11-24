export const getGap = (size?: string) => {
  switch (size) {
    case "xs":
      return "$sizes$1";
    case "sm":
      return "$sizes$2";
    case "md":
      return "$sizes$3";
    case "lg":
      return "$sizes$4";
    case "xl":
      return "$sizes$5";
    case "2xl":
      return "$sizes$5";
    default:
      return "0";
  }
};
