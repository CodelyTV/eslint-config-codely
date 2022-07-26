# Codely's ESLint + Prettier configuration

## How to use

Install the dependency

```
npm install --dev eslint-config-codely
```

Add it to your `.eslintrc.js` file:

```js
{
  extends: [ "eslint-config-codely" ]
}
```

If you are using TypeScript, extend the TypeScript configuration instead, and point to your `tsconfig.json` in parserOptions:

```js
{
  extends: [ "eslint-config-codely/typescript" ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
}
```

Please note that some of the rules enabled by default require that you have `strict: true` in your `tsconfig.json`.

## What it does

- Lints JavaScript using [`eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended) and [Prettier](https://prettier.io/)
- Additionally, lints TypeScript using [`@typescript-eslint/recommended` and `@typescript-eslint/recommended-requiring-type-checking`](https://typescript-eslint.io/docs/linting/configs)
- Uses the following plugins:
  - [`import`](https://github.com/import-js/eslint-plugin-import/): helps validate proper imports
  - [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort/): sorts imports
  - [`unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports): finds and removes unused ES6 module imports
- Uses the following [JavaScript rules](https://github.com/CodelyTV/eslint-config-codely/blob/main/.eslintrc.js#L13) and [TypeScript rules](https://github.com/CodelyTV/eslint-config-codely/blob/main/typescript.js#L17)
