const app = require('express')()
const { API_PORT } = process.env

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}!`)
})

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

const Product = sequelize.define('product', {
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
})
