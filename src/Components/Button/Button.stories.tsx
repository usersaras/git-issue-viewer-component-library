import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  args: {
    color: "blue",
    size: "base",
    children: "Button",
    rounded: "none",
    disabled: false,
  },
};

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
    },
  },
};

export default meta;
