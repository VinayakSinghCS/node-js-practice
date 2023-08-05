// module provide OS manipulation

const os = require('os'); // all methods and properties of Operating System

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(os.uptime());

// currentOS

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMeme: os.freemem(),
}

console.log(currentOS);