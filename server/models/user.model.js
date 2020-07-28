const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      validate: {
        is: /^\d{17,}$/
      }
    }
  })
}
