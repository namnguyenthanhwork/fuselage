---
to: packages/<%=package%>/README.md
---

<!--header-->

<p align="center">
  <a href="https://subscription.boolfly.com/" title="Boolfly.Chat">
    <img src="https://github.com/boolfly/Boolfly.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Boolfly.Chat" />
  </a>
</p>

# `@boolfly.chat/<%=package%>`

> <%=description%>

---

![npm@latest](https://img.shields.io/npm/v/@boolfly.chat/<%=package%>/latest?style=flat-square) ![npm@next](https://img.shields.io/npm/v/@boolfly.chat/<%=package%>/next?style=flat-square) ![npm downloads](https://img.shields.io/npm/dw/@boolfly.chat/<%=package%>?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@boolfly.chat/<%=package%>?style=flat-square)

![deps](https://img.shields.io/david/boolfly/fuselage?path=packages%2F<%=package%>&style=flat-square) ![peer deps](https://img.shields.io/david/peer/boolfly/fuselage?path=packages%2F<%=package%>&style=flat-square) ![dev deps](https://img.shields.io/david/dev/boolfly/fuselage?path=packages%2F<%=package%>&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@boolfly.chat/<%=package%>?style=flat-square)

<!--/header-->

## Install

<!--install-->

Add `@boolfly.chat/<%=package%>` as a dependency:

```sh
npm i @boolfly.chat/<%=package%>

# or, if you are using yarn:

yarn add @boolfly.chat/<%=package%>
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
