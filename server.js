const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var hostname = "localhost" ; 

// const csvtojsonRouter = require('./routes/convert')
var csvtojson = require('./routes/convert');
app.use('/csv',csvtojson);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, hostname, () => console.log(`Server running on port ${port} , ${hostname}`));



