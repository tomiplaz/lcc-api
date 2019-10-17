'use strict'

const { API_PORT, STRIPE_SECRET_KEY } = process.env

const app = require('express')()
const stripe = require('stripe')(STRIPE_SECRET_KEY)

require('/src/sequelize')

app.use(require('cors')())
app.use(require('body-parser').text())

app.get('/', (req, res) => {
  res.send('LCC API')
})

app.get('/products', async (req, res) => {
  const { Product } = require('/src/models/product')

  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (err) {
    console.log('Error querying for Products:', err)
  }
})

app.post('/charge', async (req, res) => {
  try {
    const { status } = await stripe.charges.create({
      amount: 4850,
      currency: 'eur',
      description: 'LCC charge',
      source: req.body
    })

    res.json({ status })
  } catch (err) {
    console.log('Error creating a charge:', err)
    res.status(500).send()
  }
})

app.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}!`)
})
