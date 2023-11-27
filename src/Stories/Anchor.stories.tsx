import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "../Components/Anchor";

type Story = StoryObj<typeof Anchor>;

export const Link: Story = {
  args: {
    href: "sasa",
    children: "Link",
    color: "blue",
    fontSize: "xs",
    fontWeight: "bold",
  },
};

const meta: Meta<typeof Anchor> = {
  title: "Components/Atoms",
  component: Anchor,
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
