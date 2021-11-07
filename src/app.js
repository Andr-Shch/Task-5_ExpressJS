const express = require('express');
const app = express()
//import all methods for path ``/api/v1/authors``
const authors = require('./routes/authors')

app.use(express.json()) 

app.use('/api/v1/authors', authors )

app.get('/', (req,res)=>{
  res.send("hello world")
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })
  // catch server errors and respond with 500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(5000, ()=>{
    console.log(`Server runing at port 5000....`);
})

module.exports.app = app;