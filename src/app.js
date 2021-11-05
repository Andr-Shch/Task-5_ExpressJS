const express = require('express');
const app = express()

//import all methods for path ``/api/v1/authors``
const authors = require('./routes/authors')

app.use(express.json()) 

app.use('/api/v1/authors', authors )



app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(5000, ()=>{
    console.log(`Server runing at port 5000....`);
})