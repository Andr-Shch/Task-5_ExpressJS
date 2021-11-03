const { writeFileSync} = require('fs')


for (let index = 0; index < 10000; index++) {
    writeFileSync(
        './content/big-file.txt',
        `HERE WE GO: ${index}\n`,
        {flag:'a'}
     )
    
}

