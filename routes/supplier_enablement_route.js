const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db/dbconnection');

 router.post('/', (req, res) => {
     db.query('select Prospect_Supplier_Name as Supplier, SMP_USD as SMP, Enablement_Strategy as Strategy from unmatched_suppliers where Prospect_ID = :id order by SMP desc limit 20', {
         replacements: {
             id: req.body.id
         },
            type: Sequelize.QueryTypes.SELECT
     }).then(aggregate => {
         res.json(aggregate);
     });        
 });

module.exports = router; 