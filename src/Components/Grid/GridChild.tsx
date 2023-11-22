import React from "react";
import { Child } from "./Grid.styled";

interface GridChildProps {
  children: JSX.Element | string;
  rowStart?: string;
  rowEnd?: string;
}

const GridChild = ({ children, rowStart, rowEnd }: GridChildProps) => {
  return <Child css={{ $$rs: rowStart, $$re: rowEnd }}>{children}</Child>;
};

export default GridChild;