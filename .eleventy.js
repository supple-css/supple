// Import plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Import transforms
const htmlMinTransform = require('./_docs/src/transforms/html-min-transform.js');
const parseTransform = require('./_docs/src/transforms/parse-transform.js');

// Import shortcodes
const demoShortcode = require('./_docs/src/shortcodes/demo.js');

module.exports = function (config) {
  // shortcodes
  config.addPairedShortcode('demo', demoShortcode);

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Add plugins
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(syntaxHighlight);

  // Base eleventyConfig
  return {
    dir: {
      input: './',
      includes: '_docs/src/templates/_includes',
      data: '_docs/src/templates/_data',
      output: '_docs/dist',
    },
    passthroughFileCopy: true,
  };
};
