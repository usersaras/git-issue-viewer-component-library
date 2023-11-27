import React from "react";
import { withAnchor } from "../../Utils/withAnchor";
import { Text, TextPropTypes } from "../Text";

const AnchorText = withAnchor(Text);

export const Anchor = ({
  as = "span",
  children,
  color = "darkGrey",
  fontSize = "base",
  fontWeight = "base",
  href,
}: TextPropTypes & { href: string }) => {
  const props = { as, color, fontSize, fontWeight };
  return (
    <AnchorText {...props} href={href}>
      {children}
    </AnchorText>
  );
};
