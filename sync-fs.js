// fs can be synchronous and asynchronous different method

// non blocking code is preferred


// 4 methods

// synchronous

const {readFileSync,writeFileSync, writeFile} = require('fs');

console.log('start');

// path and the encoding

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8');


// if not there then it will make a new file
// if this is the case then it will write over what so over it is 
console.log(writeFileSync('./content/resultSync.txt',`here is the result \n${first} \nß${second}`));
console.log("done with the task")
console.log("starting with the next ");

// to append int  the file

// writeFileSync('./content/resultSync.txt',`\nthis section is added`,{flag: 'a'})

console.log(first);
console.log(second);


