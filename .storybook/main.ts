import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: resolve(__dirname, "../vite.config.storybook.ts"),
      },
    },
  },
};
export default config;
