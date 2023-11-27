import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Components/Card/Card";

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  args: {
    color: "blue",
    size: "base",
    children: "Button",
    rounded: "none",
    disabled: false,
  },
};

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
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
