import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DockItem from "../src/DockItem";
import { Settings } from "lucide-react";

const meta = {
  component: DockItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <DockItem {...args}>
      <Settings />
    </DockItem>
  ),
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof DockItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
