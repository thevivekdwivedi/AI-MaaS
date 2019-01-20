const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db/dbconnection');

 router.post('/', (req, res) => {
     db.query('select * from prospect_match_rate where Prospect_ID = :id order by Match_Current_Status desc', {
         replacements: {
             id: req.body.id
         },
            type: Sequelize.QueryTypes.SELECT
     }).then(aggregate => {
         res.json(aggregate);
     });        
 });

module.exports = router; 