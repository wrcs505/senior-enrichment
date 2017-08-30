'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: Sequelize.STRING,
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/images/clemson.png'
  },
})
