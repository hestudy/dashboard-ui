import type { Meta, StoryObj } from "@storybook/react";

import Dock from "../src/Dock";
import DockItem from "@/DockItem";
import { Box, Settings } from "lucide-react";

const meta = {
  component: Dock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  subcomponents: {
    // @ts-ignore
    DockItem,
  },
  render: (args) => (
    <Dock {...args}>
      <DockItem>
        <Settings />
      </DockItem>
      <DockItem>
        <Box />
      </DockItem>
    </Dock>
  ),
} satisfies Meta<typeof Dock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
