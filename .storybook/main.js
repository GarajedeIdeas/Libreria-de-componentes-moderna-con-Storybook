const cssModules = require('../config/cssModules')
module.exports = {
  stories: ["../atoms/**/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: cssModules()
};
