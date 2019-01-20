const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db/dbconnection');
const prospectSpend = require('../models/prospect_spend');

router.get('/:id', (req, res) => {
                prospectSpend.findAll({
                  where: {
                    Prospect_ID: id
                  }
                }).then(summary => {
                  res.json(summary);
                });
});

router.post('/match', (req, res) => {
     db.query('select Enablement_Strategy,count(*) as count from prospect_spend where Prospect_ID = :id group by Enablement_Strategy order by Enablement_Strategy asc', {
         replacements: {
             id: req.body.id
         },
            type: Sequelize.QueryTypes.SELECT
     }).then(aggregate => {
         res.json(aggregate);
     });        
 });

 router.post('/getMatch', (req, res) => {
   db.query('select count(*) as count from prospect_spend where Prospect_ID = :id group by Match_Status order by Match_Status;', {
         replacements: {
             id: req.body.id
         },
            type: Sequelize.QueryTypes.SELECT
     }).then(aggregate => {
         res.json(aggregate);
     });  
 })

router.post('/', (req, res) => {
  console.log("ID: "+req.body.id);
  console.log("industry: "+req.body.industry.length);
  count = 0;
  CapInd = "";
  for(let ind of req.body.industry) {
    ind = ind.trim();
    if (count == 0) {
      CapInd += "'"+ind+"'";
      count ++;
    } else {
      CapInd += ",'"+ind+"'";
    }
  }
  console.log(CapInd);
  query = "select Capiq_Industry, Match_Status, count(*) as Count from prospect_spend where Prospect_ID = "+req.body.id+" and Capiq_Industry IN ("+CapInd+") group by Match_Status, Capiq_Industry";
  db.query(query, {
            type: Sequelize.QueryTypes.SELECT
     }).then(match => {
         res.json(match);
     }); 
});

router.get('/', (req, res) => {
  prospectSpend.findAll().then(summary => {
    res.json(summary);
  });
});

module.exports = router;
