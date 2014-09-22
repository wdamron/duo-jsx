'use strict';

var react = require('react-tools');

module.exports = function duoJSX (opts) {
    opts = opts || {};

    return function transform (file) {
        if (file.type !== 'js') return;
        file.src = react.transform(file.src, opts);
    };
};
