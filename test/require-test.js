var tinyRequire = require(".."),
    path = require("path"),
    assert = require("assert")

suite("tinyRequire", function () {
    test("has methods", function () {
        b = tinyRequire()

        assert(b.add)
    })

    suite("add", function (done) {
        var b = tinyRequire()
        b.add(path.join(__dirname, "codes", "x.js"))
        b.source(function (err, source) {
            eval(source)
            assert(global.corrupt, 42)
            delete global.corrupt
            done()
        })
    })
})