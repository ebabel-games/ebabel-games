const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');
const cleanCSS = require('@node-minify/clean-css');

minify({
  compressor: htmlMinifier,
  input: 'src/index.html',
  output: 'public/index.html',
  options: {
    removeAttributeQuotes: true,
    conservativeCollapse: true,
  },
  callback: (err, min) => err ? console.error(err) : null,
});

minify({
  compressor: htmlMinifier,
  input: 'src/free-games/index.html',
  output: 'public/free-games/index.html',
  options: {
    removeAttributeQuotes: true,
    conservativeCollapse: true,
  },
  callback: (err, min) => err ? console.error(err) : null,
});

minify({
  compressor: cleanCSS,
  input: 'src/style.css',
  output: 'public/style.css',
  callback: (err, min) => err ? console.error(err) : null,
});
