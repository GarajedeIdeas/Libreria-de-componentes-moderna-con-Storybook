// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
// Alternative https://www.npmjs.com/package/storybook-css-modules-preset
const cssModules = () => async (config) => {
  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  return config
}

module.exports = cssModules
