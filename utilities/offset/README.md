---
layout: layouts/lithe/pattern.njk
tags:
title: utilities.offset
metaDesc: 'Utility which provides a offset custom property for use in objects or components which can handle those offsets.'
permalink: utilities/offset/index.html
eleventyNavigation:
  key: Offset
  parent: Utilities
---

Utility which provides a offset custom property for use in objects or components which can handle those offsets eg. `object.layout`.

## Table of contents

- [Features](#features)
- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)

## Features

- Easy & flexible offsets in your objects & components
- Works nicely with `objects.layout`

## Use

```html
<div class="o-layout">
  <div class="u-offset-3">starts a column 3</div>
  <div class="u-offset-7">starts a column 7</div>
</div>
```

## Available classes

By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

- `.u-offset-X`, spans over the designated number of columns
- `.u-offset-X@[QUERY-NAME]`: applies offset at the given media query. (available in `$in-query` SCSS setting)

## Configurable variables

### SCSS variables

- `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
- `$in-query`: a list of media queries where `.u-offset-X@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset' with (
  $columns: 10,
  $in-query: (lap, desk),
);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset/variables' with (
  $in-query: (lap, desk),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset';
```
