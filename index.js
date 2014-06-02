
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

// How to use a foreign module ?
// Take 'jquery' for example:
//
// 1. to install a dependency, exec the command in your terminal
// ```bash
// cortex install jquery --save
// ```

// 2. use `require(id)` method:
// ```js
// var $ = require('jquery');
// ```

var $ = require('jquery');

// `exports` is the API of the current module,
// If another module `require('cortex-hybrid-sample')`, it returns `exports`
exports.init = function() {
  require.async('util', function(util) {
    console.log(util.isNumber(4));
  });
  
  $('<div>').html('hello world').appendTo('body');
};

// or you could code like this:
// ```js
// module.exports = {
// 	my_method: function() {
//   		hello();
// 	}
// };
// ```

// But, NEVER do this:
// ```js
// exports = {my_method: ...}
// ```

// Why?
