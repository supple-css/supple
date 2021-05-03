---
layout: layouts/lithe/pattern.njk
tags:
title: utilities.hidden
metaDesc: 'Hides an element completely from flow and screenreaders.'
permalink: utilities/hidden/index.html
eleventyNavigation:
  key: Hidden
  parent: Utilities
---

Hides an element completely from flow and screenreaders.

## Table of contents

- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)

## Use

```html
<button>
  This button has text that is
  <span class="u-hidden">
    totally hidden from flow, view and assistive technology
  </span>
</button>
```

### responsive modifiers

When you set media queries in `$in-query` you can use them like this:

```html
<button>
  This button has text that is
  <span class="u-hidden@lap">
    totally hidden from flow, view and assistive technology
  </span>
</button>
```

## Available classes

**On the `.u-hidden` block**

- `.u-hidden`: core visually hidden block
- `.u-hidden@[QUERY-NAME]`: applies hidden at the given media query. (available in `$in-query` SCSS setting)

## Configurable variables

### SCSS variables

- `$in-query`: a list of media queries where `.u-hidden@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden' with (
  $in-query: (lap, desk),
);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden/variables' with (
  $in-query: (
    lap
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/hidden';
```
