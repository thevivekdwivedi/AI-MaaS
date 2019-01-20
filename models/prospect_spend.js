const Sequelize = require('sequelize');
const db = require('../db/dbconnection');

const prospect_spend = db.define('prospect_spend', {
          Prospect_ID: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
          },
          Prospect_Supplier_Name: {
                    type: Sequelize.TEXT,
                    primaryKey: true
          },
          Capiq_Industry: {
                    type: Sequelize.STRING
          },
          Spend_USD: {
                    type: Sequelize.FLOAT(16,2)
          },
          PO_Count: {
                    type: Sequelize.INTEGER
          },
          Invoice_Count: {
                    type: Sequelize.INTEGER
          },
          Enablement_Strategy: {
                    type: Sequelize.STRING
                    // add foreign key reference
          },
          Match_Status: {
                    type: Sequelize.ENUM('Match','NoMatch')
          },
          Critical: {
                    type: Sequelize.ENUM('Y','N')
          }
})

module.exports = prospect_spend;
