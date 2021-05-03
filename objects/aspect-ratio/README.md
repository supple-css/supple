---
layout: layouts/lithe/pattern.njk
tags:
title: objects.aspect-ratio
metaDesc: 'For use with multi-media embeds that need to retain a specific aspect ratio but adapt to elements of variable widths.'
permalink: objects/aspect-ratio/index.html
eleventyNavigation:
  key: Aspect-ratio
  parent: Objects
---

For use with multi-media embeds such as videos, images or slideshows, that need to retain a specific aspect ratio but adapt to elements of variable widths.

## Table of contents

- [Features](#features)
- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)

## Features

- Fluid multi-media embeds.
- Retains to a specific aspect ratio.
- Configurable with custom properties.

## Use

You can overwrite the SCSS variables the following way in your `_vars.scss`:

```scss
@use '@supple-kit/supple-css/objects/aspect-ratio/variables' with (
  $ratios: (
    (4:3),
    (16:9),
  ),
);
```

And then include the module in your `styles.scss` manifest file:

```scss
@use 'node_modules/@supple-kit/supple-css/objects/aspect-ratio';
```

Alternatively you can also directly override the variables from your manifest file:

```scss
@use '@supple-kit/supple-css/objects/aspect-ratio' with (
  $ratios: (
    (4:3),
    (16:9),
  ),
);
```

Then you can apply the classes to the HTML.
By default the aspect ratio container has a ratio of `1:1`, a perfect square.

```html
<div class="o-aspect-ratio">
  <img src="//via.placeholder.com/450" alt="" loading="lazy" />
</div>
```

<div class="o-fixture">
  <div class="o-aspect-ratio">
    <img src="//via.placeholder.com/450" alt="" loading="lazy" />
  </div>
</div>

### Modifiers on `.o-aspect-ratio`

```html
<div
  class="o-aspect-ratio [o-aspect-ratio--4by3  |  o-aspect-ratio--16by9  |  o-aspect-ratio--2by1]"
>
  <img src="" alt="" />
</div>
```

<figure class="o-fixture  |  o-flow">
  <div class="o-aspect-ratio  o-aspect-ratio--4by3">
    <img src="//via.placeholder.com/400x300" alt="" loading="lazy" />
  </div>
  <figcaption>with <code>o-aspect-ratio--4by3</code></figcaption>
</figure>

<figure class="o-fixture  |  o-flow">
  <div class="o-aspect-ratio  o-aspect-ratio--16by9">
    <img src="//via.placeholder.com/1600x900" alt="" loading="lazy" />
  </div>
  <figcaption>with <code>o-aspect-ratio--16by9</code></figcaption>
</figure>

<figure class="o-fixture  |  o-flow">
  <div class="o-aspect-ratio  o-aspect-ratio--2by1">
    <img src="//via.placeholder.com/2000x1000" alt="" loading="lazy" />
  </div>
  <figcaption>with <code>o-aspect-ratio--2by1</code></figcaption>
</figure>

### Custom properties

```html
<div class="o-aspect-ratio" style="--ratio: (560/315);">
  <img src="" />
</div>
```

<figure class="o-fixture  |  o-flow">
  <div class="o-aspect-ratio" style="--ratio: (560/315);">
    <img src="//via.placeholder.com/560x315" alt="" loading="lazy" />
  </div>
  <figcaption>with <code>style="--ratio: (560/315);"</code></figcaption>
</figure>

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead:

```scss
.c-card {
}
.c-card__wrap-image {
  --ratio: (560/315);
}
```

HTML would look like this:

```html
<div class="c-card">
  <div class="c-card__wrap-image  |  o-aspect-ratio">
    <img src="//via.placeholder.com/560x315" alt="" />
  </div>
</div>
```

## Available classes

**On the `.o-aspect-ratio` block**

- `.o-aspect-ratio`: core aspect ratio block
- `.o-aspect-ratio--4by3`: creates a embed with an aspect ratio of 4 by 3 (configurable in `$ratios` SCSS variable)
- `.o-aspect-ratio--16by9`: creates a embed with an aspect ratio of 16 by 9 (configurable in `$ratios` SCSS variable)
- `.o-aspect-ratio--2by1`: creates a embed with an aspect ratio of 2 by 1 (configurable in `$ratios` SCSS variable)

## Configurable variables

There are multiple ways to configure the aspect-ratio object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-aspect-ratio` block**

- `--ratio`: The aspect ratio you want to have eg `(530/315)`, defaults to `(1/1)`

### SCSS variables

- `$ratios`: a list of ratios where `.o-aspect-ratio--XbyX` is generated for, defaults to: `((2:1), (4:3), (16:9))`
