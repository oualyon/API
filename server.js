const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 5000;
var hostname = "localhost" ; 

app.use(cors())
// const csvtojsonRouter = require('./routes/convert')
var csvtojson = require('./routes/convert');
app.use('/csv',csvtojson);
var geojson = require('./routes/convert');
app.use('/geo',geojson);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, hostname, () => console.log(`Server running on port ${port} , ${hostname}`));



