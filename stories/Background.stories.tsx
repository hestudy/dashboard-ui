import type { Meta, StoryObj } from "@storybook/react";

import Background from "../src/Background";

const meta = {
  tags: ["autodocs"],
  component: Background,
  args: {
    color1: "red",
    color2: "blue",
  },
  argTypes: {
    color1: {
      control: {
        type: "color",
      },
    },
    color2: {
      control: {
        type: "color",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: 500,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
