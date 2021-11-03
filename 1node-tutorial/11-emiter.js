const EventEmitter = require('events');
const http = require('http')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('data recived');
})
customEmitter.on('responseAbout', (name, id)=>{
    console.log('see some about: '+name+id);
})


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
                  <h1>welcome to our page</h1> 
                  <a href="/about">about</a>
               `);
        customEmitter.emit('response') //emiter
    } else if (req.url === '/about') {
        res.end(`
                  <h1>Here is about</h1>
                  <a href="/">back home</a>
                `)
                customEmitter.emit('responseAbout', 'Jejden', 11) //emiter
    } else {
        res.end(`
                <h1>GO AWAYYYYYYYY</h1>
                <a href="/">back home</a>
               `)
    }
})

server.listen(5000)