---
layout: layouts/lithe/pattern.njk
tags:
title: settings.defaults
metaDesc: 'Supple default variables, without this file the framework won’t work'
permalink: settings/defaults/index.html
eleventyNavigation:
  key: Defaults
  parent: Settings
---

This file contains the Supple default variables, without this file the framework won't work.

## Table of contents

- [Use](#use)
- [Baseline](#baseline)
- [Space-factors](#space-factors)
- [Typography](#typography)
- [Grid](#grid)
- [Responsive](#responsive)
- [Namespace](#namespace)
- [Technology](#technology)

## Use

You can override and forward the default variables in your `_vars.scss`:

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $columns: 10,
  $baseline: 6px,
  $space-factors: (
    'base': 3,
    'tiny': 1,
  ),
);

@forward '@supple-kit/supple-css/settings/defaults';

// Your own SCSS variables
$theme-color: #bada55;
```

By using `@forward` you can import and use Supple CSS’s variables just by including your own `_vars.scss` inside your other modules:

```scss
@use 'settings/vars';

.your-module {
  --columns: #{vars.$columns}; // variable from Supple CSS defaults
  color: vars.$theme-color; // your own variable
}
```

This way you create a single source of truth which you can re-use throughout your whole codebase.

## `$baseline`

By default supple creates an 8 point baseline to create vertical (and horizontal) rhythm. Everything is spaced by this baseline: line-height, margin, padding and gap in `objects.mesh` and `objects.layout`.

More information:

- [https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632)
- [https://medium.freecodecamp.org/8-point-grid-typography-on-the-web-be5dc97db6bc](https://medium.freecodecamp.org/8-point-grid-typography-on-the-web-be5dc97db6bc)

**Defaults to:**

```scss
$baseline: 8px !default;
```

**Example:**

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $baseline: 6px
);
```

## `$space-factors`

The following map multiply the `$baseline` to consistent and transparent spacing names.

**Defaults to:**

```scss
$space-factors: (
  'tiny': 1,
  'small': 2,
  'base': 3,
  'large': 6,
  'huge': 12,
) !default;
```

**Example:**

You can choose every name and multiplication factor that you like, but the **base** entry is mandatory.

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $space-factors: (
    'base': 4,
    'pico': 2,
    'nano': 3,
    'kilo': 6,
    'mega': 12,
  )
);
```

These multiplication factors are converted to a `rem` value and available through our `space.get()` function:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/space';

.your-selector {
  margin-block-end: space.get('base');
}
```

## Typography

You can set the base font-size and line-height of the application:

**Defaults to:**

```scss
$font-size: 16px !default;
$line-height: map.get($space-factors, 'base') * $baseline !default; // 3 * 8px = 24px
```

**Example:**

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $font-size: 20px,
  $line-height: 32px
);
```

## Grid

You can set a global `$columns` variable which is used in `objects.layout`, `objects.mesh`, `utilities.colspan` & `utilities.colstart`.

**Defaults to:**

```scss
$columns: 12;
```

**Example:**

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $columns: 24
);
```

**Note** this is only a global columns setting shared across modules, you can override module specific columns in their own `_variable.scss` file.

## Responsive

Working with breakpoints is pretty straightforward. You can add as many breakpoints as you want.

**Defaults to:**

```scss
$breakpoints: (
  palm: 320px,
  lap: 640px,
  desk: 960px,
  wall: 1280px,
) !default;

$queries: (
  palm: palm,
  lap: lap,
  desk: desk,
  wall: wall,
) !default;
```

As you can see we have a `$breakpoints` list which only can contain `px` or `em` values. These breakpoints are then mapped by name to sensible media query names in `$queries`.

The names you define in `$queries` can be used in the `responsive.mq()` mixin like:

```scss
@use '@supple-kit/supple-css/tools/responsive';

.your-selector {
  color: #ff0000;

  @include responsive.mq('desk') {
    color: #00ff00;
  }
}
```

You can go entirely crazy with your breakpoints and queries:

```scss
@use '@supple-kit/supple-css/settings/defaults' with (
  $breakpoints: (
    baby-bear: 320px,
    mama-bear: 640px,
    papa-bear: 960px,
    grandma-bear: 1280px,
  ),

  $queries: (
    // min-width
    baby-bear: baby-bear,
    mama-bear: mama-bear,
    papa-bear: papa-bear,
    grandma-bear: grandma-bear,
    // max-width
    until-papa-bear: (
      max: papa-bear,
    ),
    // min-width & max-width
    mama-bear-until-papa-bear: (
      min: mama-bear,
      max: papa-bear,
    ),
    // min-width & max-width with generic px value
    mama-bear-until-generic: (
      min-width: mama-bear,
      max-width: 1024px,
    ),
    // You can also apply height queries
    height-large-until-huge: (
      min-height: 640px,
      max-height: 1024px,
    )
  )
);
```

Name your breakpoints and queries in a way that creates a ubiquitous language across team members. It will improve communication between stakeholders, designers, developers, and testers.

## Namespace

By default all responsive classes in Supple CSS are prefixed with `@`. This way it is clear that, for example, `u-colspan-8@palm` is a responsive modifier.

**Defaults:**

```scss
$responsive-modifier: unquote('\\@') !default;
```

**Example:**

```scss
$responsive-modifier: '--';
```

## Technology

Sometimes 3rd party technologies don't play nice with some supple modules.
The settings you find in this category enables us to use supple with technologies like css-modules.

**Defaults:**

```scss
$css-modules: false !default;
```

**Example:**

```scss
$css-modules: true;
```
