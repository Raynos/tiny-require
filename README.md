# tiny-require [![Build Status][1]][2]

Package your commonJS modules for browsers

## Status: Development

 - [example][3]
 - [motivation][4]
 - [docs][8]
 - [installation][9]
 - [test][10]
 - [contributors][11]
 - [licence][12]

***

## <a name="example" href="#example">Example</a>

    // entry.js
    var o = require("./o")
    o.doIt()

    // o.js
    module.exports = { 
        doIt: function () {
            console.log("you did it")    
        }
    }

Compiles to

    (function () {
        var c={} // var cache = {}

        function r(t) { // function require(token) {
            return c[t] // return cache[token]
        }

        function d(t,f,m) { // function define(token, func, module) {
            m={} // module = {}
            f(r, m) // func(require, module)
            c[t] = m.exports // cache[token] = module.exports
        }

        d("b", function (require, module) { // define("./o", ...
            module.exports = {
                doIt: function () {
                    console.log("you did it")
                }
            }
        })

        d("a", function (require, module) { // define("./entry", ...
            var o = require("b") // var o = require("./o")
            o.doIt()
        })
    }())

***

## <a name="motivation" href="#motivation">Motivation</a>

 - [modul8][5]
 - [browserify][6]
 - [webmake][7]

All handle this in a similar fashion but they give a large overhead in terms of extra bytes in the compiled file

To cut corners on byte size the following techniques are used

 - require urls are normalized on the server and then mapped to minimized strings
 - the require/define functions are as small as possible
 - only module.exports is supported, the exports token doesn't exist

***

## <a name="docs" href="#docs">Documentation</a>

TBD

***

## <a name="installation" href="#installation">Installation</a>

`$ npm install tiny-require`

***

## <a name="test" href="#test">Test</a>

`$ make test`

***

## <a name="contributors" href="#contributors">Contributors</a>

 - [Raynos][13]

***

## <a name="licence" href="#licence">MIT Licenced</a>

***

  [1]: https://secure.travis-ci.org/Raynos/tiny-require.png
  [2]: http://travis-ci.org/Raynos/tiny-require
  [3]: https://github.com/Raynos/tiny-require#example
  [4]: https://github.com/Raynos/tiny-require#motivation
  [5]: https://github.com/clux/modul8
  [6]: https://github.com/substack/node-browserify
  [7]: https://github.com/medikoo/modules-webmake
  [8]: https://github.com/Raynos/tiny-require#docs
  [9]: https://github.com/Raynos/tiny-require#installation
  [10]: https://github.com/Raynos/tiny-require#test
  [11]: https://github.com/Raynos/tiny-require#contributors
  [12]: https://github.com/Raynos/tiny-require#licence
  [13]: https://github.com/Raynos
