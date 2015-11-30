var fs = require('fs');

fs.readFile('problem_2.txt','utf8', function(err,data) {
    if (err) {
        console.log(err);
    }
    console.log(data.replace(/t/gi,'U'));
});