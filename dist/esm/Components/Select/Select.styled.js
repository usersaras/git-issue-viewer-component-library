import React from "react";
import * as Select from "@radix-ui/react-select";
import GlobalCSS from "../../Styles/GlobalStyle";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { sizeVariants } from "../SharedStyles/sizeVariants";
import { roundedVariants } from "../SharedStyles/roundedVariants";
import { styled } from "../../Config/stitches.config";
const SelectParent = styled("div", {
    position: "relative",
    height: "max-content",
});
const SelectRoot = styled(Select.Root, {});
const SelectTrigger = styled(Select.Trigger, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4px",
    padding: "8px",
    border: `1px solid $gray500`,
    width: "100px",
}, {
    variants: {
        size: sizeVariants,
        rounded: roundedVariants,
    },
});
const SelectValue = styled(Select.Value, {
    overflow: "hidden",
    background: "green",
    whiteSpace: "nowrap",
});
const SelectContent = styled(Select.Content, {});
const SelectViewport = styled(Select.Viewport, {
    marginTop: "4px",
    background: "white",
    border: `1px solid $gray200`,
    right: "0",
    display: "flex",
    flexDirection: "column",
}, {
    variants: {
        size: sizeVariants,
        rounded: roundedVariants,
    },
});
const SelectItem = styled(Select.Item, {
    cursor: "pointer",
    padding: "4px 8px",
    outline: "none",
    "&:hover": {
        background: "$gray200",
        outline: "none",
        borderRadius: "4px",
        padding: "4px 8px",
    },
});
const ComponentToRender = ({ size, options, rounded, }) => {
    GlobalCSS();
    return (React.createElement(SelectParent, null,
        React.createElement(SelectRoot, null,
            React.createElement(SelectTrigger, { size: size, rounded: rounded },
                React.createElement("p", { style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    } },
                    React.createElement(SelectValue, { placeholder: "Select" })),
                React.createElement(Select.Icon, { asChild: true, children: React.createElement(ChevronDownIcon, null) })),
            React.createElement(SelectContent, { position: "popper" },
                React.createElement(SelectViewport, { size: size, rounded: rounded }, options.map((option, index) => {
                    return (React.createElement(SelectItem, { key: index, value: option.value },
                        React.createElement(Select.ItemText, { children: option.label })));
                }))))));
};
export const SelectComponent = styled(ComponentToRender, {});
//# sourceMappingURL=Select.styled.js.map