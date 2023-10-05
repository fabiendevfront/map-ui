# React + TypeScript + Vite

## Presentation

[In progress] Project to display a map listing the refuges in the Pyrenees. Technologies: React, TypeScript, Tailwind CSS and Leaflet.

## Requirements

* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

## Launching the project

This project was built using [Vite.js](https://vitejs.dev/).

* Clone this project: [https://github.com/fabiendevfront/map-ui](https://github.com/fabiendevfront/map-ui)
* Go to folder and open a terminal window
* Install dependencies with `npm install`
* Start application with `npm run dev`, allow you to run at http://localhost:5173/
* For build App for production use `npm run build`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
