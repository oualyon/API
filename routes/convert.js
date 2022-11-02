
const CSVToJSON = require('csvtojson')
var express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  CSVToJSON()
  .fromFile('exemple/users.csv')
  .then(users => {
    res.send(users);  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;



// module.exports = {CSVToJSON}