var fs = require('fs');

fs.readFile('problem_1.txt', 'utf8', function(err,data) {
    if (err) {
        console.log('error');
    }
    var nuc = data.split(''),
        results = {
            a: 0,
            c: 0,
            g: 0,
            t: 0
        };
    nuc.forEach(function(char) {
        var lower = char.toLowerCase();
        if (results.hasOwnProperty(lower)) {
            results[lower] = ++results[lower];
        }
    });
    console.log(Object.keys(results).map(function(v) { return results[v]; }).join(' '));
});