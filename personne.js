var n;
var a;
process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        if (index % 2 == 0) {
            n = val;
        }
        else {
            a = parseInt(val);
            var p = { nom: n, age: a };
            console.log(p);
        }
    }
});
