import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
export default {
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },

  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc")
  ]
};

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
