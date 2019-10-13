'use strict'

const { Sequelize, sequelize } = require('/src/sequelize')

class Product extends Sequelize.Model {}

Product.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'product'
})

module.exports = { Product }
