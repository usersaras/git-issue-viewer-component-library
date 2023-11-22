import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../Components/Grid";

type Story = StoryObj<typeof Grid>;

export const GridLayout: Story = {
  args: {
    // color: "blue",
    // size: "base",
    // children: "Button",
    // rounded: "none",
    // disabled: false,
  },
};

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  //   argTypes: {
  //     size: {
  //       control: { type: "select" },
  //     },
  //     color: {
  //       control: { type: "select" },
  //     },
  //   },
};

export default meta;
