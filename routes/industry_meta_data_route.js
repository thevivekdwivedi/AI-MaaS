const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const industryMetaData = require('../models/industry_meta_data');

/**
 * Method to get all the industry types
 */
router.get('/allTypes', (req, res) => {
    industryMetaData.findAll({
        attributes: ['Prospect_Industry']
    }).then(types => {
        res.json(types);
    })
});

/**
 * Method to get all the critical industries for a particular industry which is passed via the body.
 */
router.post('/criticalInds/', (req, res) => {
    industryMetaData.find({
        attributes: ['Critical_Industries'],
        where: {
            Prospect_Industry: req.body.ProspectInd
        }
    }).then(criticalInds => {
        res.json(criticalInds);
    });
});

module.exports = router;