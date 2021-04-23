---
tags:
title: Pattern one - title
metaTitle: Pattern one - metaTitle
metaDesc: Pattern one - metaDesc
permalink: category-one/pattern-one/index.html
eleventyNavigation:
  key: Pattern one
  parent: Category one
---

Pattern one content

## Code Block

```html
<html></html>
```

```css
.foo {
  color: #ff0000;
}
```

```scss
.foo {
  @include mixin($variable);
}
```

```javascript
import { method } from 'module';

method(() => {
  console.log();
});
```

## HTML

<div class="o-layout">
  <div class="o-layout__cell  u-colspan-3">Spans 3 of 12</div>
  <div class="o-layout__cell  u-colspan-6">Spans 6 of 12</div>
  <div class="o-layout__cell  u-colspan-3">Spans 3 of 12</div>
</div>

## Shadow dom demo

{% demo %}

  <div>
    <button aria-pressed="false">Toggle Me</button>

    <style>
      button {
          background: #ee4266;
          color: white;
          border: 0;
          font-size: 1rem;
          padding: 0.5em 1em;
          border: 5px solid #000000;
          border-top-width: 0;
          border-left-width: 0;
      }

      [aria-pressed='true'] {
        border-width: 0;
        border-top-width: 5px;
        border-left-width: 5px;
      }
    </style>

    <script>
      var toggle = demo.querySelector('[aria-pressed]');

      toggle.addEventListener('click', (e) => {
        let pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', !pressed);
      });
    </script>

  </div>
{% enddemo %}
