var express = require('express');
const router = express.Router();
const balade_rhone = "file/rhone.geojson" ; 
const barathonA = "file/bar.geojson" ; 
const barathonB = "file/bar_guillotiere_to_vieuxlyon.geojson" ; 
const Presquile_historique = "file/Presquile_historique.geojson" ; 
const StreetArt_1 = "file/StreetArt.geojson"
const StreetArt_2 = "file/StreetArt2.geojson"
const  Vieux_Lyon_Historique = "file/Vieux_Lyon_Historique.geojson"


var fs = require('fs');


router.get('/balade_rhone', function(req, res) {
  fs.readFile(balade_rhone, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      var jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
    }
  });
});

router.get('/barathonA', function(req, res) {
    fs.readFile(barathonA, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });
  
  router.get('/barathonB', function(req, res) {
    fs.readFile(barathonB, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });
  router.get('/Balade_Presquile_historique', function(req, res) {
    fs.readFile(Presquile_historique, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });

  router.get('/Balade_StreetArt_1', function(req, res) {
    fs.readFile(StreetArt_1, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });

  router.get('/Balade_StreetArt_2', function(req, res) {
    fs.readFile(StreetArt_2, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        var jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(jsonData));
      }
    });
  });
  router.get('/Balade_Vieux_Lyon_Historique', function(req, res) {
    fs.readFile(Vieux_Lyon_Historique, function(err, data) {
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
