const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  listing_url: {
    type: DataTypes.STRING,
  },

  summary: {
    type: DataTypes.STRING,
  },
})

module.exports = User