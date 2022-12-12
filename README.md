<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px"/>
  </a>
</p>

<h1 align="center">
  🤏 Codely's ESLint + Prettier configuration
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  Opinionated linting configuration considering modern TypeScript best practices and providing consistency to your <code>import</code> statements. Valid for your JavaScript or TypeScript projects 🤟
  <br />
  <br />
  Take a look, play and have fun with this.
  <a href="https://github.com/CodelyTV/eslint-config-codely/stargazers">Stars are welcome 😊</a>
</p>

## 👀 How to use

1. Install the dependency
   ```bash
   npm install --save-dev eslint-config-codely
   ```
2. Add it to your `.eslintrc.js` file:
   ```js
   {
     extends: [ "eslint-config-codely" ]
   }
   ```
3. If you are using TypeScript, extend the TypeScript configuration instead, and point to your `tsconfig.json` in `parserOptions`:
   ```js
   {
     extends: [ "eslint-config-codely/typescript" ],
     overrides: [
      {
        files: ["*.ts", "*.tsx"],
        parserOptions: {
          project: ["./tsconfig.json"],
        },
      },
    ]
  }
  ```

ℹ️ Please note that some of the rules enabled by default require that you have `strict: true` in your `tsconfig.json`.

## 🤔 What it does

- Lints JavaScript using [`eslint:recommended`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended) and [Prettier](https://prettier.io/)
- Additionally, lints TypeScript using [`@typescript-eslint/recommended` and `@typescript-eslint/recommended-requiring-type-checking`](https://typescript-eslint.io/docs/linting/configs)
- Uses the following plugins:
  - [`import`](https://github.com/import-js/eslint-plugin-import/): helps validate proper imports
  - [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort/): sorts imports
  - [`unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports): finds and removes unused ES6 module imports
- Uses the following [JavaScript rules](https://github.com/CodelyTV/eslint-config-codely/blob/main/.eslintrc.js#L13) and [TypeScript rules](https://github.com/CodelyTV/eslint-config-codely/blob/main/typescript.js#L17)

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related resources

- [🔦 Linting en JavaScript y TypeScript](https://pro.codely.com/library/linting-en-javascript-y-typescript-188432/446893/about/): Used as a template to bootstrap this plugin
- [🎯 Codely's ESLint Hexagonal Architecture plugin](https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture): A plugin that helps you to enforce hexagonal architecture best practises. Valid for your JavaScript or TypeScript projects

Opinionated skeletons ready for different purposes:

- [✨🌱 JavaScript Basic Skeleton](https://github.com/CodelyTV/javascript-basic-skeleton)
- [🔷🌱 TypeScript Basic Skeleton](https://github.com/CodelyTV/typescript-basic-skeleton)
- [🔷🕸️ TypeScript Web Skeleton](https://github.com/CodelyTV/typescript-web-skeleton)
- [🔷🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton)
- [🔷✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)
