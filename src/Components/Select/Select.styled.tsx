import React from "react";
import * as Select from "@radix-ui/react-select";
import GlobalCSS from "../../Styles/GlobalStyle";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
import { styled } from "../../Config/stitches.config";
import { SelectProps } from "./Select";

const SelectParent = styled("div", {
  position: "relative",
  height: "max-content",
});
const SelectRoot = styled(Select.Root, {});

const SelectTrigger = styled(
  Select.Trigger,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4px",
    padding: "8px",
    border: `1px solid $gray300`,
    background: "transparent",
    minWid: "$$minWid",
    maxWid: "$$maxWid",
  },
  {
    variants: {
      size: sizeVariants,
      rounded: roundedVariants,
    },
  }
);

const SelectValue = styled(Select.Value, {
  overflow: "hidden",
  background: "green",
  whiteSpace: "nowrap",
});

const SelectContent = styled(Select.Content, {
  minWid: "$$minWid",
  maxWid: "$$maxWid",
});

const SelectViewport = styled(
  Select.Viewport,
  {
    marginTop: "4px",
    background: "white",
    border: `1px solid $gray200`,
    right: "0",
    display: "flex",
    flexDirection: "column",
  },
  {
    variants: {
      size: sizeVariants,
      rounded: roundedVariants,
    },
  }
);

const SelectItem = styled(Select.Item, {
  cursor: "pointer",
  padding: "4px 8px",
  outline: "none",

  "&[data-highlighted]": {
    background: "$gray200",
    outline: "none",
    borderRadius: "4px",
    padding: "4px 8px",
  },
});

const ComponentToRender = ({
  size,
  options,
  rounded,
  minWidth,
  maxWidth,
  placeholder,
}: SelectProps) => {
  GlobalCSS();
  return (
    <SelectParent>
      <SelectRoot>
        <SelectTrigger
          size={size}
          rounded={rounded}
          css={{
            $$minWid: minWidth || maxWidth,
            $$maxWid: maxWidth,
          }}
        >
          <p
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <SelectValue placeholder={placeholder || "Select"} />
          </p>
          <Select.Icon asChild={true} children={<ChevronDownIcon />} />
        </SelectTrigger>

        <SelectContent
          position="popper"
          css={{
            $$minWid: minWidth || maxWidth,
            $$maxWid: maxWidth,
          }}
        >
          <SelectViewport size={size} rounded={rounded}>
            {options.map((option, index) => {
              return (
                <SelectItem key={index} value={option.value}>
                  <Select.ItemText children={option.label} />
                </SelectItem>
              );
            })}
          </SelectViewport>
        </SelectContent>
      </SelectRoot>
    </SelectParent>
  );
};
export const SelectComponent = styled(ComponentToRender, {});
