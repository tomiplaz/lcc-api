'use strict'

const app = require('express')()
const { API_PORT } = process.env

require('/src/sequelize')

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/products', async (req, res) => {
  const { Product } = require('/src/models/product')

  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (err) {
    console.log('Error querying for Products at GET /products:', err)
  }
})

app.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}!`)
})
