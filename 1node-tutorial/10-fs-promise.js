const {readFile,writeFile} = require('fs').promises
//const util = require('util')

 //const readText = util.promisify(readFile)
// const writeText = util.promisify(writeFile)


  const start = async()=>{
      try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/promisify-text.txt', `HERE WE GO: ${first}, ${second}`, {flag:'a'})
        console.log('await: '+first+' and '+second); 
      } catch (error) {
          console.log(error);
      }
  }
    
  start()

      //with promise\\
//   const getText = (path) => {
//     return new Promise((resolve, reject) =>{
//       readFile(path, 'utf8', (err, data)=>{
//        if(err) {
//            reject(err);
//        } else{
//            resolve(data)
//        }
//       })
//     })
// }

// getText('./content/first.txt')
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err))