import React from "react";
import { GridWrapper } from "./Grid.styled";

interface GridParentProps {
  children: JSX.Element | string;
  columns?: string;
  rows?: string;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const GridParent = ({
  children,
  columns,
  gap,
  rows,
}: GridParentProps) => {
  const getGap = (size: string) => {
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
  return (
    <GridWrapper
      css={{ $$cols: columns, $$rows: rows, $$g: getGap(gap || "0") }}
    >
      {children}
    </GridWrapper>
  );
};
