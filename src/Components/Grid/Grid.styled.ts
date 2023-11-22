import { styled } from "../../Config/stitches.config";

export const GridWrapper = styled("div", {
  "&>div": {
    display: "grid",
    gridTemplateColumns: "repeat($$cols,auto)",
    gridTemplateRows: "repeat($$rows,auto)",
    g: "$$g",
  },
});

export const Child = styled("div", {
  rowStart: "$$rs",
  rowEnd: "$$re",
  g: "$$g",
});
