const {readFile,writeFile} = require('fs');

let first;
let second;

console.log('starting with the task');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    first = result;

    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }

        second = result;

        writeFile('./content/result-async.txt',`here is the result \n${first}\n${second}`,(err,result)=>{
            
            if(err){
                console.log(err);
                return;
            }   
            console.log(result);

        })
    })

})

console.log("done with the task")
console.log("starting with the next ");





