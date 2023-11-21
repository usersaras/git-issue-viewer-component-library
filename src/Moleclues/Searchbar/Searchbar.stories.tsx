import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Searchbar from "./Searchbar";

type Story = StoryObj<typeof Searchbar>;

export const BasicInput: Story = {
  //   args: {
  //     placeholder: "Enter github repo...",
  //     sizeStyle: "xs",
  //     rounded: "sm",
  //     color: "none",
  //     disabled: false,
  //   },
};

const meta: Meta<typeof Searchbar> = {
  title: "Molecu;es/Input",
  component: Searchbar,
  argTypes: {
    // color: {
    //   control: { type: "select" },
    // },
    // sizeStyle: {
    //   control: { type: "select" },
    // },
  },
};

export default meta;
