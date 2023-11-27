import React from "react";
import { Child } from "./Grid.styled";
import { Text } from "../Text";

interface GridChildProps {
  children: JSX.Element | string;
  rowStart?: string;
  rowEnd?: string;
}

export const GridChild = ({ children, rowStart, rowEnd }: GridChildProps) => {
  return (
    <Child css={{ $$rs: rowStart, $$re: rowEnd }}>
      <>
        {children}
        <Text color="darkGrey" text="Hey There" />
      </>
    </Child>
  );
};
