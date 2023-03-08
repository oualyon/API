var express = require('express');
const router = express.Router();
const gpx = "file/rhone.geojson" ; 
const bar = "file/bar.geojson" ; 
const bar_guillotiere_to_vieuxlyon = "file/bar_guillotiere_to_vieuxlyon.geojson" ; 

var fs = require('fs');


router.get('/gpx', function(req, res) {
  fs.readFile(gpx, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});

router.get('/Bar', function(req, res) {
    fs.readFile(bar, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });
  
  router.get('/bar_guillotiere_to_vieuxlyon', function(req, res) {
    fs.readFile(bar_guillotiere_to_vieuxlyon, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });

module.exports = router;
