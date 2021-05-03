---
layout: layouts/lithe/pattern.njk
tags:
title: Installation
metaDesc: There are many ways to install Supple CSS, our recommendation is to install it with a package manager like NPM or Yarn.
permalink: installation/index.html
eleventyNavigation:
  key: Installation
  order: 1
---

There are many ways to install Supple CSS, our recommendation is to install it with a package manager like [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/).

## Prerequisites

If you're installing Supple CSS with a package manager you'll need to have [Node.js](https://nodejs.org/) installed.
Supple CSS is always tested against the latest Long Term Support version of Node, currently at `14`.

Supple CSS is built with the latest version of [Sass](https://sass-lang.com/) so your build-pipeline must also be equipped with [Dart Sass](https://sass-lang.com/dart-sass).

## Install with package managers

NPM:

```bash
npm install @supple-kit/supple-css --save-dev
```

Yarn

```bash
yarn add @supple-kit/supple-css
```

## Install from tarball

You can also manually install Supple CSS by downloading the [tarball](https://github.com/supple-kit/supple-css/archive/refs/heads/main.zip).
After downloading and unpacking you can copy the following folders to your project:

```bash
- settings
- tools
- generic
- objects
- utilities
```
