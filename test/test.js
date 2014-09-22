'use strict';

var fs        = require('fs'),
    exp_react = fs.readFileSync(__dirname+'/exp_react.js', 'utf8'),
    exp_es6   = fs.readFileSync(__dirname+'/exp_es6.js', 'utf8'),
    test      = require('tape'),
    jsx       = require('../index.js'),
    Duo       = require('duo');

test('duo-js', function (t) {
    t.plan(3);
    
    //basic usage
    Duo(__dirname+'/tmp/0')
     .entry(__dirname+'/react.js')
     .use(jsx())
     .run(function (err, src) {
         if (err) t.fail(err.message);
         t.equal(src, exp_react, 'should compile jsx');

     });

    //wrong filetype
    Duo(__dirname+'/tmp/1')
     .entry(__dirname+'/react.css')
     .use(jsx())
     .run(function (err, src) {
         t.error(err, 'should ignore non-js');
     });
    
    //options
    Duo(__dirname+'/tmp/2')
     .entry(__dirname+'/es6.js')
     .use(jsx({harmony: true}))
     .run(function (err, src) {
         if (err) t.fail(err.message);
         t.equal(src, exp_es6, 'should accept options');
     });
});
