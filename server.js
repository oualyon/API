const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())
var geojson = require('./routes/convert');
app.use('/geo',geojson);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,() => console.log(`Server running on port ${port}`));



