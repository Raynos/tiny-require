var fs = require("fs")

var startCode = 
        "(function () {\n" +
        "   var c={}\n" +
        "\n" +
        "   function r(t) {\n" +
        "       return c[t]\n" +
        "   }\n" +
        "\n" +
        "   function d(t,f,m) {\n"
        "       m={}\n" +
        "       f(r,m)\n" +
        "       c[t]=m.exports\n" +
        "   }\n" +
        "\n",
    endCode = "}())\n"

var Bundle = {
    constructor: function () {
        return this
    },
    add: function (fileName) {

    }
}

module.exports = makeBundle

function makeBundle() {
    return Object.create(Bundle).constructor()
}