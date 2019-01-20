const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const tasks = require('../models/tasks');

router.get('/:id', (req, res) => {
    tasks.find({
        where: {
            Prospect_ID: req.params.id
        }
    }).then(task => {
        res.json(task);
    });
});

router.get('/', (req, res) => {
    tasks.findAll()
              .then(tasks => {
                        res.json(tasks);
              });
});

module.exports = router;