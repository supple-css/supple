---
layout: layouts/lithe/pattern.njk
tags:
title: objects.list-clean
metaDesc: 'Strip appearance from lists by removing their bullets and indents.'
permalink: objects/list-clean/index.html
eleventyNavigation:
  key: List-clean
  parent: Objects
---

Strip appearance from lists by removing their bullets and indents.

## Table of contents

- [Use](#use)
- [Available classes](#available-classes)

## Use

```html
<ul class="o-list-clean">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

<div class="o-fixture">
  <ul class="o-list-clean">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>

And on a single `dd` child

```html
<dl>
  <dt>List item 1</dt>
  <dd class="o-list-clean__item">List item 2</dd>
</dl>
```

<div class="o-fixture">
  <dl>
    <dt>Term</dt>
    <dd class="o-list-clean__item">Definition</dd>
  </dl>
</div>

## Available classes

- `.o-list-clean`: core list clean block
- `.o-list-clean__item`: cleans list style properties from a single item
