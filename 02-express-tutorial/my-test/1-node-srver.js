const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./MY-navbar/index.html')
const homeStyles = readFileSync('./MY-navbar/styles.css')

const server = http.createServer((req, res)=>{
    const url = req.url
      if(url === '/'){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(homePage)
        res.end()
      } 
      else if(url === '/styles.css'){
        res.writeHead(200, {"content-type":"text/css"})
        res.write(homeStyles)
        res.end()
      }
      //about page
      else if(url === '/about'){
        res.writeHead(200, {"content-type":"text/html"})
        res.write('<h1>ABOUT page</h1>')
        res.end()
      }
      //home page
      else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write('<h1>page not found</h1>')
        res.end()
      }
        console.log(url);
   
})

server.listen(5000)