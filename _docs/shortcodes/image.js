const Image = require('@11ty/eleventy-img');

module.exports = async function imageShortcode(src, alt) {
  console.log('src', src);

  let metadata = await Image(src, {
    widths: [320, 480, 640, 768, 1114, null],
    urlPath: '/assets/media/', // set this to make images show up
    outputDir: './dist/assets/media/',
    formats: ['avif', 'jpeg'],
  });

  let imageAttributes = {
    alt,
    sizes: '100vw',
    loading: 'lazy',
    decoding: 'async',
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
};
