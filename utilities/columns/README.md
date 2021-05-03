---
layout: layouts/lithe/pattern.njk
tags:
title: utilities.columns
metaDesc: 'Utility which provides a columns custom property for use in objects or components which can handle those columns.'
permalink: utilities/columns/index.html
eleventyNavigation:
  key: Columns
  parent: Utilities
---

Utility which provides a columns custom property for use in objects or components which can handle those columns eg. `object.mesh` and `object.layout`.

## Table of contents

- [Features](#features)
- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)

## Features

- Easy & flexible columns in your objects & components
- Works nicely with `objects.mesh` and `objects.layout`

## Use

```html
<div class="o-mesh  u-columns-10">
  <div class="u-colspan-3">spans 3 of 10 columns</div>
  <div class="u-colspan-7">spans 7 of 10 columns</div>
</div>
```

## Available classes

By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

- `.u-columns-X`, spans over the designated number of columns
- `.u-columns-X@[QUERY-NAME]`: applies colums at the given media query. (available in `$in-query` SCSS setting)

## Configurable variables

### SCSS variables

- `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
- `$in-query`: a list of breakpoints where `.u-columns-X@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/columns' with (
  $columns: 10,
  $in-query: (lap, desk),
);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/columns/variables' with (
  $in-query: (lap, desk),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/columns';
```
