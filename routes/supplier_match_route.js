const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db/dbconnection');

 router.post('/', (req, res) => {
     db.query('select Supplier, Match_Current_Status from supplier_match where ID = :id', {
         replacements: {
             id: req.body.id
         },
            type: Sequelize.QueryTypes.SELECT
     }).then(aggregate => {
         res.json(aggregate);
     });        
 });

module.exports = router; 