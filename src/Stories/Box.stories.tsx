import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Components/Box";

type Story = StoryObj<typeof Box>;

export const BaseBox: Story = {
  args: {
    background: "lightGrey",
    border: "leftBlue",
    size: "base",
    children: <p>Hey there!</p>,
    rounded: "sm",
  },
};

const meta: Meta<typeof Box> = {
  title: "Components/Atoms",
  component: Box,
  argTypes: {
    // size: {
    //   control: { type: "select" },
    // },
    // color: {
    //   control: { type: "select" },
    // },
    // rounded: {
    //   type: "select",
    // },
  },
};

export default meta;
