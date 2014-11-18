
var react = require('react-tools');

module.exports = function duoJSX (opts) {
  opts = opts || {};

  return function transformJSX (file) {
    if (file.type !== 'js' || file.type !== 'jsx') return;
    file.src = react.transform(file.src, opts);
    file.type = 'js';
  };
};
