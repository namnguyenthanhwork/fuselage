<!--header-->

<p align="center">
  <a href="https://subscription.boolfly.com/" title="Boolfly.Chat">
    <img src="https://github.com/boolfly/Boolfly.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Boolfly.Chat" />
  </a>
</p>

# `@boolfly.chat/fuselage-toastbar`

> Fuselage ToastBar component

---

[![npm@latest](https://img.shields.io/npm/v/@boolfly.chat/fuselage-toastbar/latest?style=flat-square)](https://www.npmjs.com/package/@boolfly.chat/fuselage-toastbar/v/latest) [![npm@next](https://img.shields.io/npm/v/@boolfly.chat/fuselage-toastbar/next?style=flat-square)](https://www.npmjs.com/package/@boolfly.chat/fuselage-toastbar/v/next) ![react version](https://img.shields.io/npm/dependency-version/@boolfly.chat/fuselage-toastbar/peer/react?style=flat-square) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://boolflychat.github.io/fuselage/fuselage-toastbar) ![npm downloads](https://img.shields.io/npm/dw/@boolfly.chat/fuselage-toastbar?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@boolfly.chat/fuselage-toastbar?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@boolfly.chat/fuselage-toastbar?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@boolfly.chat/fuselage-toastbar?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i @boolfly.chat/fuselage @boolfly.chat/fuselage-hooks @boolfly.chat/fuselage-polyfills @boolfly.chat/styled react react-dom

# or, if you are using yarn:

yarn add @boolfly.chat/fuselage @boolfly.chat/fuselage-hooks @boolfly.chat/fuselage-polyfills @boolfly.chat/styled react react-dom
```

Add `@boolfly.chat/fuselage-toastbar` as a dependency:

```sh
npm i @boolfly.chat/fuselage-toastbar

# or, if you are using yarn:

yarn add @boolfly.chat/fuselage-toastbar
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/boolfly/fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->

### Running tests

Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

<!--yarn(test)-->

```sh
yarn test
```

<!--/yarn(test)-->
