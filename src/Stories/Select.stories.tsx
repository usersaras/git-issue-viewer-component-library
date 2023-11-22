import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../Components/Select/Select";

type Story = StoryObj<typeof Select>;

export const BasicSelect: Story = {
  args: {
    size: "sm",
    rounded: "md",
    options: [
      { label: "label1 hey there", value: "value1" },
      { label: "label2", value: "value2" },
      { label: "label3", value: "value3" },
    ],
    placeholder: "Hey",
    maxWidth: "",
    minWidth: "",
  },
};

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    size: {
      control: { type: "select" },
    },
    rounded: {
      control: { type: "select" },
    },
  },
};

export default meta;
