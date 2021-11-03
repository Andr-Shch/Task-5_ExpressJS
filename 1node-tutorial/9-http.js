const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>welcome to our page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>Here is about</h1>')
    } else {
        res.end(`
                <h1>GO AWAYYYYYYYY</h1>
                <a href="/">back home</a>
               `)
    }
})

server.listen(5000)