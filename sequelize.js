'use strict'

const Sequelize = require('sequelize')

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD
} = process.env

const sequelize = new Sequelize(
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  { host: POSTGRES_HOST, dialect: 'postgres'}
)

sequelize
  .authenticate()
  .then(() => console.log('Connected to the database!'))
  .catch(err => console.log('Error connecting to database:', err))

module.exports = {
  Sequelize,
  sequelize,
}

require('./models')
