import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Components/Input/Input";

type Story = StoryObj<typeof Input>;

export const BasicInput: Story = {
  args: {
    placeholder: "Enter github repo...",
    sizeStyle: "xs",
    rounded: "sm",
    disabled: false,
  },
};

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    sizeStyle: {
      control: { type: "select" },
    },
  },
};

export default meta;
