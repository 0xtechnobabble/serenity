function assert(x) { if (!x) throw 1; }

try {
    var d = new Date();
    assert(!isNaN(d.getSeconds()));
    assert(0 <= d.getSeconds() <= 59);
    assert(d.getSeconds() === d.getSeconds());
    console.log("PASS");
} catch (e) {
    console.log("FAIL: " + e);
}
