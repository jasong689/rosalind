var fs = require('fs');

fs.readFile('problem_3.txt','utf8', function(err,data) {
    if (err) {
        console.log(err);
    }
    var complements = {
        a: 'T',
        t: 'A',
        g: 'C',
        c: 'G'
    },
    rev = data.split('').reverse();
    console.log(rev.join('').replace(/[atgc]/gi,function(v) {
        return complements.hasOwnProperty(v.toLowerCase())? complements[v.toLowerCase()] : '';
    }));
});