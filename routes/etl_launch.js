var express = require('express');
const router = express.Router();
const ETL ="exemple/etl.py" ; 
const {spawn} = require('child_process')

router.use('/', function(req, res) {

    const python = spawn ('python3' , [ETL]);

    python.on('error', (error) => {
      console.log('error: ', error.message);
      res.send("Error during process execution ");
    });
    
    python.on('close', (code) => {
      console.log("child process exited with " , code)
      res.send("Process finished");
    });


});
  
  
  module.exports = router;