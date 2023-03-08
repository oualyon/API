var express = require('express');
const router = express.Router();
const fileDirectory = "file/";

var fs = require('fs');

router.get('/:fileType', function(req, res) {
var fileType = req.params.fileType;
var fileName = "";
switch(fileType){
    case 'gpx':
        fileName = "rhone.geojson";
        break;
    case 'bar_guillotiere_to_vieuxlyon':
        fileName = "bar_guillotiere_to_vieuxlyon.geojson";
        break;
    case 'bar':
        fileName = "bar.geojson";
        break;
    default:
    res.send('File type not found');
    return;
}

fs.readFile(fileDirectory + fileName, function(err, data) {
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