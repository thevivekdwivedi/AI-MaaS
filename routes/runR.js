const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log("Inside runR.js. Request Body: "+req.body);
    cmd.get('Rscript ./R/Codathon_V2.r '+req.body.pid+' /Users/c5261865/Documents/GitHub/AIMaaS/uploads/ '+req.body.file,
      (err, data, stderr) => {
        if(err) {
          res.json(err);
        } else {
          res.json("Success");
        }
      });
});

module.exports = router;