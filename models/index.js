const { sequelize } = require('/src/sequelize')

const { Product } = require('./product')

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Tables created!')
    Product.create({
      name: 'Product',
      description: 'Lorem ipsum dolor sit amet',
      price: 8.95
    })
    .then(() => {
      console.log('Product created!')
      Product.findAndCountAll({
        where: { name: 'Product' }
      })
      .then((res) => {
        console.log('Products found:', res.count)
        console.log('Products:', res.rows.map(row => row.dataValues.name))
      })
      .catch((err) => console.log('Error finding Products:', err))
    })
    .catch((err) => console.log('Error creating Product:', err))
  })
  .catch((err) => console.log('Error creating tables:', err))
