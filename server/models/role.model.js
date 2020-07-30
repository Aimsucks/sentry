const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('role', {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    }
  })
}
