import React from "react";

import "@testing-library/jest-dom";
import { composeStory } from "@storybook/react";
import Meta, { BaseBox } from "../Stories/Box.stories";
import { render } from "@testing-library/react";

const TestBox = composeStory(BaseBox, Meta);

test("It renders", () => {
  render(<TestBox />);
});
