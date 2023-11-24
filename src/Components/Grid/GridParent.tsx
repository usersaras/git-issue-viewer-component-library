import React from "react";
import { GridWrapper } from "./Grid.styled";
import { getGap } from "../../Utils/getGap";

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
  return (
    <GridWrapper
      css={{
        $$cols: columns,
        $$rows: rows,
        $$g: getGap(gap || "0"),
      }}
    >
      {children}
    </GridWrapper>
  );
};
