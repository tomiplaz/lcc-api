const { sequelize } = require('/src/sequelize')

require('./product')

sequelize
  .sync({ force: true })
  .then(() => console.log('Tables created!'))
  .catch((err) => console.log('Error creating tables:', err))
