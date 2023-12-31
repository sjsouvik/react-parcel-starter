# React Parcel starter

A ReactJS template powered by Parcel which would help developers to start frontend development quickly with ReactJS, TypeScript, testing, linting, etc. without doing any setup on their own.

## Tech stack

-   React, React DOM
-   TypeScript
-   Parcel
-   Babel
-   jest, React Testing Library
-   ESLint, Prettier

## Setup jest & React Testing Library

-   Install jest, React Testing Library

    ```bash
    npm i -D jest # using `-D` to install as a dev-dependency
    npm i -D @testing-library/react
    ```

-   Install babel dependencies and configure babel as mentioned [here](https://jestjs.io/docs/getting-started#using-babel)
-   configure parcel to disable default babel transpilation in parcel as mentioned [here](https://parceljs.org/languages/javascript/#usage-with-other-tools)
-   Generate a basic jest configuration by executing the following:

    ```bash
    npx jest --init
    ```

-   Install `jest-environment-jsdom` as mentioned [here](https://testing-library.com/docs/react-testing-library/setup#jest-28) since we're using jest 29
-   Install `@babel/preset-react` to support JSX in test cases
-   Add `@babel/preset-react` in babel config as a preset
-   Install `@testing-library/jest-dom` for custom DOM element matchers(e.g. `.toBeInTheDocument()`, `.toHaveBeenCalledWith()`, etc.)
-   Add `setupTests.js` file inside `src` to add the code which is repeating in each test file(e.g. import of jest-dom for extra matchers) and provide that as a module in jest config `setupFilesAfterEnv` option as mentioned here [here](https://jestjs.io/docs/configuration#setupfilesafterenv-array). For more jest related configurations, refer to [this](https://jestjs.io/docs/configuration)
-   Install `identity-obj-proxy` as a dev-dependency and add that in jest config `moduleNameMapper` option to mock CSS modules. Refer to these links for more details [jest doc](https://jestjs.io/docs/webpack#mocking-css-modules), [github issue](https://github.com/jestjs/jest/issues/3094#issuecomment-575024136)

## Add TypeScript

-   Install TypeScript as a dev dependency
-   Execute `npx tsc --init` to add `tsconfig.json`
-   Install dev dependencies - `@types/react`, `@types/react-dom` to have TypeScript types for React and React DOM

## Setup ESLint, Prettier

-   Install the following eslint plugins, parser for linting purposes: `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`

    ```bash
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
    ```

-   Install these prettier related dependencies for code formatting: `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`

    ```bash
    npm i -D prettier eslint-config-prettier eslint-plugin-prettier
    ```

### Reference

-   [React with TypeScript](https://www.sitepoint.com/react-with-typescript-best-practices/)
-   [TypeScript with ESLint and Prettier](https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project)

## Support

Give it a ⭐ if you like it.
