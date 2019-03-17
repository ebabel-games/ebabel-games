const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');

minify({
  compressor: htmlMinifier,
  input: 'index.html',
  output: 'public/index.html',
  options: {
    removeAttributeQuotes: true,
    conservativeCollapse: true,
  },
  callback: (err, min) => err ? console.error(err) : null,
});
