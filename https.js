// http 

const http = require('http');

// create server
const server = http.createServer((req,res)=>{

    console.log(req);
    // res.write
    if(req.url==='/'){
        res.end('welcome to our home page');
        return;
    }

    if(req.url==='/about'){
        res.end('welcome to our about page');
        return;
    }

    res.end(`<h1>ooops ! </h1><p> we can't seem to find the page </p>`);

    return;

})

// what port our port will be listening to 
server.listen(5000);