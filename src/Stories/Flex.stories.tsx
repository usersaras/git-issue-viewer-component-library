import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../Components/Flex";

type Story = StoryObj<typeof Flex>;

export const BaseFlex: Story = {
  args: {
    alignItems: "center",
    direction: "row-reverse",
    gap: "xs",
    justifyContent: "center",
    children: [<p>Obj 1</p>, <p>Obj 2</p>],
  },
};

const meta: Meta<typeof Flex> = {
  title: "Components/Atoms",
  component: Flex,
  argTypes: {
    alignItems: {
      control: { type: "select" },
    },
    direction: {
      control: { type: "select" },
    },
    gap: {
      control: { type: "select" },
    },
    justifyContent: {
      control: { type: "select" },
    },
  },
};

export default meta;
