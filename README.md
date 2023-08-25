# React Parcel starter

A ReactJS template which would help developers to start frontend development with ReactJS quickly without doing any setup on their own.

## Tech stack

- React, React DOM
- Parcel
- Babel
- jest, React Testing Library

## Setup jest & React Testing Library

- Install jest, React Testing Library

  ```bash
  npm i -D jest // using `-D` to install as a dev-dependency
  npm i -D @testing-library/react
  ```

- Install babel dependencies and configure babel as mentioned [here](https://jestjs.io/docs/getting-started#using-babel)
- configure parcel to disable default babel transpilation in parcel as mentioned [here](https://parceljs.org/languages/javascript/#usage-with-other-tools)
- Generate a basic jest configuration by executing the following:

  ```bash
  npx jest --init
  ```

- Install `jest-environment-jsdom` as mentioned [here](https://testing-library.com/docs/react-testing-library/setup#jest-28) since we're using jest 29
- Install `@babel/preset-react` to support JSX in test cases
- Add `@babel/preset-react` in babel config as a preset
- Install `@testing-library/jest-dom` for custom DOM element matchers(e.g. `.toBeInTheDocument()`, `.toHaveBeenCalledWith()`, etc.)

## Support

Give it a ⭐ if you like it.