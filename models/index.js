const { sequelize } = require('/src/sequelize')

const { Product } = require('./product')

initDb()

async function initDb() {
  try {
    await sequelize.sync({ force: true })

    console.log('Tables created!')
    try {
      const productData = {
        name: 'Product',
        description: 'Lorem ipsum dolor sit amet',
        price: 1,
        image: 'images/products/product.jpg'
      }

      await Product.create({ ...productData, price: 9.95 })
      await Product.create({ ...productData, price: 12.95 })
      await Product.create({ ...productData, price: 4.95 })

      console.log('Products created!')

      try {
        const result = await Product.findAndCountAll({
          where: { name: 'Product' }
        })

        console.log('Products found:', result.count)
        console.log('Products:', result.rows.map(row => row.dataValues.name))
      } catch (err) {
        console.log('Error finding Products:', err)
      }
    } catch (err) {
      console.log('Error creating Product:', err)
    }
  } catch (err) {
    console.log('Error creating tables:', err)
  }
}
