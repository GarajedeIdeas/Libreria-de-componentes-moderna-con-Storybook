# Modern Component Library Workshop

## Instructions

Start this workshop checking out the branch `00-install-storybook`

### 00-install-storybook
1. Add React and React DOM running `yarn add react react-dom`
1. Start Storybook with `yarn storybook`

### 01-add-global-styles
1. Add minireset.css `yarn add minireset.css`
1. Add a file called `styles/globals.css` with:
```css
html,
body {
  height: 100%;
  font-family: var(--font-family-sans, sans-serif);
  font-size: var(--font-size-base, 10px);
}

#root {
  height: 100%;
}
```
3. Add global styles `globals.css` and reset styles `minireset.css` to `.storybook/preview.js`
4. Add typography from Google Fonts to `.storybook/preview-head.html`
```html
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
```