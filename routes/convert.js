const CSVToJSON = require('csvtojson')
var express = require('express');
const router = express.Router();
const activityFile ="exemple/activities2.csv" ; 
var fs = require('fs');

 router.get('/', function(req, res) {
   fs.readFile('file/Activities.geojson', function(err, data) {
     if (err) {
       res.send(err);
     } else {
       var jsonData = JSON.parse(data);
       res.setHeader('Content-Type', 'application/json');
       res.send(JSON.stringify(jsonData));
     }
   });
 });


router.get('/:category', function(req, res) {
  fs.readFile('file/Activities.geojson', function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      var filteredFeatures = jsonData.features.filter(function(feature) {
        return feature.properties.Category === req.params.category;
      });
      jsonData.features = filteredFeatures;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});

module.exports = router;
