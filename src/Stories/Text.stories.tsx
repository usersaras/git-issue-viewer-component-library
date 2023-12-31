import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Components/Text";

type Story = StoryObj<typeof Text>;

export const StyledText: Story = {
  args: {
    children: "The fox jumps!",
    color: "lightGrey",
    fontSize: "sm",
    fontWeight: "base",
  },
};

const meta: Meta<typeof Text> = {
  title: "Components/Atoms",
  component: Text,
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
