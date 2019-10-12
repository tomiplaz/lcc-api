'use strict'

const app = require('express')()
const { API_PORT } = process.env

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}!`)
})

require('/src/sequelize')
