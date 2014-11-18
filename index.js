
var react = require('react-tools')
  , debug = require('debug')('duojsx');

module.exports = function duoJSX (opts) {
  opts = opts || {};

  return function transformJSX (file) {
    if (file.type !== 'js' && file.type !== 'jsx') return;

    debug('compiling % to js', file.id);

    file.src = react.transform(file.src, opts);
    file.type = 'js';
  };
};
