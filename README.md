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

### 02-add-our-first-story
1. Add classnames `yarnd add classnames`
1. Update the `.storybook/main.js` file to read stories from Atomic Design folders
```js
stories: ["../atoms/**/*.stories.@(js|mdx)"]
```
3. Create a Card Component with the following structure
```
.
└── atoms/
    └── Card/
        ├── Card.js
        ├── Card.css
        ├── Card.stories.js
        ├── constants.js
        └── index.js
```
4. Create a file called `styles/tokens.css`
```css
:root {
  --color-base-transparent: transparent;
  --color-gray-300: #e2e8f0;

  --box-shadow-sm: 0px 4px 5px rgba(0, 0, 0, 0.07);
  --box-shadow-xs: 0px 3px 6px rgba(0, 0, 0, 0.05);

  --border-width-thin: 1px;

  --color-primary: #9879e9;
  --color-primary-inverted: #fff;
  --color-secondary: #eb2d52;
  --color-secondary-inverted: #fff;
  --color-font-base: #455970;

  --card-border-radius: 10px;
}
```
5. Add the `styles/tokens.css` to `./.storybook/preview.js`
6. export the `Card` component as default in `Card/index.js`
```js
export { default } from './Card'
```
7. Define the `Card/constants.js` props for the `Card` component
```js
export const options = {
  colors: ['base', 'primary', 'secondary'],
  sizes: ['sm', 'md', 'lg'],
}
```
8. Define the `Card/Card.css` styles
```css
.card {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 12px 10px;
  border: var(--border-width-thin) solid var(--color-base-transparent);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow-sm);
  color: var(--color-font-base);
  transition: box-shadow 0.2s ease-in;
}

.size-sm {
  min-height: 45px;
}

.size-md {
  min-height: 80px;
}

.size-lg {
  min-height: 115px;
}

.color-primary {
  background: var(--color-primary);
  color: var(--color-primary-inverted);
}

.color-secondary {
  background: var(--color-secondary);
  color: var(--color-secondary-inverted);
}

.color-base {
  border: var(--border-width-thin) solid var(--color-gray-300);
  background: var(--color-primary-inverted);
}

.is-clickable {
  cursor: pointer;
}

.is-draggable {
  cursor: grab;
  user-select: none;
}

.card.is-clickable:active,
.card.is-draggable:active {
  box-shadow: var(--box-shadow-xs);
}
```
9. Write the `Card` Component
10. Write the `Card.stories.js` Story