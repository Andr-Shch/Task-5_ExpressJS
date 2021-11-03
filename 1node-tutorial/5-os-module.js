const os = require('os')

//info about user
const user = os.userInfo()
console.log(user);
//method returns up time 
console.log(`system uptime is ${os.uptime()}sec.`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);