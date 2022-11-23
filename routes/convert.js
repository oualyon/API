const CSVToJSON = require('csvtojson')
var express = require('express');
const router = express.Router();
const activityFile ="exemple/activities2.csv" ; 
router.get('/', function(req, res) {
  CSVToJSON({delimiter: ","})
  .fromFile(activityFile)
  .then(acivity => {
    res.send(acivity);  })
  .catch(err => {
    console.log(err)
  })
});


module.exports = router;
