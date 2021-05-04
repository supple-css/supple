// Import plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Import transforms
const htmlMinTransform = require('./_docs/transforms/html-min-transform.js');
const parseTransform = require('./_docs/transforms/parse-transform.js');

// Import shortcodes
const demoShortcode = require('./_docs/shortcodes/demo.js');
const imageShortcode = require('./_docs/shortcodes/image.js');

module.exports = function (config) {
  // shortcodes
  config.addPairedShortcode('demo', demoShortcode);
  config.addNunjucksAsyncShortcode('image', imageShortcode);

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
      includes: '_docs/templates/_includes',
      data: '_docs/templates/_data',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
