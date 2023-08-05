const path = require('path');


// my platform seperator
console.log(path.sep);


const filePath = path.join('./content/','subfolder/','test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log("base is : "+base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);