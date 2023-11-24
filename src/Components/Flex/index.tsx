import React from "react";
import { FlexWrapper } from "./Flex.styled";
import { getGap } from "../../Utils/getGap";

interface FlexProps {
  children: JSX.Element[];
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  alignItems:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  justifyContent:
    | "normal"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "start"
    | "end"
    | "baseline"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | "initial"
    | "inherit";
}

export const Flex = ({
  children,
  direction,
  gap,
  alignItems,
  justifyContent,
}: FlexProps) => {
  return (
    <FlexWrapper
      css={{
        $$g: getGap(gap),
        $$ai: alignItems,
        $$jc: justifyContent,
        $$d: direction,
        $dd: direction,
      }}
    >
      {children.map((child) => {
        return child;
      })}
    </FlexWrapper>
  );
};
