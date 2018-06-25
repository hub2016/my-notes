var fs = require('fs');

//异步读取
console.log("start async read");
fs.readFile('log.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("end async read");
        console.log(data);
    }
});

//同步读取
console.log("start sync read");
var data = fs.readFileSync('sum.js', 'utf-8');
console.log(data);
console.log("end sync read");