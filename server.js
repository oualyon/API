const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const hostname = "localhost" ; 

var csvtojson = require('./routes/convert');
var etl_launch = require('./routes/etl_launch');

app.use('/csv',csvtojson);
app.use('/etl',etl_launch)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, hostname, () => console.log(`Server running on port ${port} , ${hostname}`));



