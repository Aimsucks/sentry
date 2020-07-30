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
require('./role.model')(sequelize)

const { user, character, alliance, corporation, role } = sequelize.models

user.hasMany(character)
character.belongsTo(user)

character.belongsTo(corporation)
corporation.hasMany(character)

corporation.belongsTo(alliance)
alliance.hasMany(corporation)

role.belongsToMany(character, { through: 'character_permissions' })
role.belongsToMany(corporation, { through: 'corporation_permissions' })
role.belongsToMany(alliance, { through: 'alliance_permissions' })

character.belongsToMany(role, { through: 'character_permissions' })
corporation.belongsToMany(role, { through: 'corporation_permissions' })
alliance.belongsToMany(role, { through: 'alliance_permissions' })

;(async () => { await sequelize.sync() })()

module.exports = sequelize
