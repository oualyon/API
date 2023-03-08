const CSVToJSON = require('csvtojson')
var express = require('express');
const router = express.Router();
const activityFile ="file/Activities.geojson" ; 
const Station = "file/Station.geojson" ; 
const Randos = "file/Randos.geojson" ; 
var fs = require('fs');


 router.get('/', function(req, res) {
   fs.readFile(activityFile, function(err, data) {
     if (err) {
       res.send(err);
     } else {
       var jsonData = JSON.parse(data);
       res.setHeader('Content-Type', 'application/json');
       res.send(JSON.stringify(jsonData));
     }
   });
 });

 router.get('/Station', function(req, res) {
  fs.readFile(Station, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});

router.get('/Randos', function(req, res) {
  fs.readFile(Randos, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});

 router.get('/:category/:postalCode?', function(req, res) {
  fs.readFile(activityFile, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      var filteredFeatures = jsonData.features.filter(function(feature) {
        if (req.params.postalCode) {
          return feature.properties.Category === req.params.category && feature.properties["Code Postal"] === req.params.postalCode;
        } else {
          return feature.properties.Category === req.params.category;
        }
      });
      jsonData.features = filteredFeatures;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});


module.exports = router;
