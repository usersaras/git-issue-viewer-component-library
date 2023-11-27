import { styled } from "@stitches/react";
import React from "react";

const StyledAnchor = styled("a", {
  textDecoration: "none",
  color: "unset",
  cursor: "pointer",
});

export function withAnchor<T>(Component: React.ComponentType<T>) {
  return (props: T & { href: string }) => {
    const { href } = props;
    return (
      <StyledAnchor href={href}>
        <Component {...props} />
      </StyledAnchor>
    );
  };
}
