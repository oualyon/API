const express = require('express')
const app = express()
var csvtojson = require('./routes/convert');
var etl_launch = require('./routes/etl_launch');
var cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())
var geojson = require('./routes/location_dot');
var itinary = require('./routes/itinary_route');
app.use('/geo',geojson);
app.use('/itinary',itinary);


app.listen(port,() => console.log(`Server running on port ${port}`));



