# duo-jsx

[react-tools](https://github.com/facebook/react) plugin for [duo](https://github.com/duojs/duo).

## Examples

```sh
$ npm install --save-dev duo-js
```

###CLI

```sh
$ duo -u duo-jsx in.js > out.js
```

###Node

```js
var Duo = require('duo'),
    jsx = require('duo-jsx');

Duo(__dirname)
 .entry('main.js')
 .use(jsx())
 .run(function (err, src) {
    // ...
 });
```
##API

```js
var jsx = require('duo-jsx');
```

###jsx([options])

options: ```Object```

Options are passed to react-tools

####options.sourceMap

Type: ```Boolean``` Default: ```false```

Append inline source map at the end of the transformed source. 

####options.harmony

Type: ```Boolean``` Default: ```false```

Enable ES6 features.

####options.filename

Type: ```string``` Default: ```'source.js'```

The output filename for the source map.
