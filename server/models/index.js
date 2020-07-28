const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false
})

require('./user.model')(sequelize)
require('./character.model')(sequelize)
require('./alliance.model')(sequelize)
require('./corporation.model')(sequelize)

const { user, character, alliance, corporation } = sequelize.models

user.hasMany(character)
character.belongsTo(user)

character.belongsTo(corporation)
corporation.hasMany(character)

corporation.belongsTo(alliance)
alliance.hasMany(corporation)

;(async () => { await sequelize.sync() })()

module.exports = sequelize
